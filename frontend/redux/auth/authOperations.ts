import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export interface IResult {
  id: string;
  token: string;
  refreshtoken?: string;
  error?: string | null;
}
export interface IRequestPayload {
  logIn: string;
  password: string;
}
export interface IRequestLogoutPayload {
  id: number;
}

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ' ';
  },
};

export const login = createAsyncThunk<
  IResult,
  IRequestPayload,
  { rejectValue: SerializedError }
>('login', async (credentials, { rejectWithValue }) => {
  console.log(credentials);
  try {
    const res: AxiosResponse<IResult> = await axios.post(
      '/api/auth',
      credentials,
    );
    if (!res.status) {
      throw new Error();
    }
    token.set(res.data.token);
    return res.data as IResult;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Something went wrong');
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error('Something went wrong');
      throw new Error('');
    }
  }
});

export const logout = createAsyncThunk<
  void,
  IRequestLogoutPayload,
  { rejectValue: SerializedError }
>('logout', async (credentials, { rejectWithValue }) => {
  const { id } = credentials;
  try {
    await axios.post(`/api/auth/${id}/logout`);
    token.unset();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error as SerializedError);
    }
  }
});
