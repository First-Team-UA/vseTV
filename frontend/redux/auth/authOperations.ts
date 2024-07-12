import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

axios.defaults.baseURL = `${process.env.API_BASE_URL}`;

export interface IResult {
  id: string;
  token: string;
  refreshtoken?: string;
  error?: string | null;
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
  void,
  { rejectValue: SerializedError }
>('login', async (credentials, { rejectWithValue }) => {
  const { t } = useTranslation();
  try {
    const res: AxiosResponse<IResult> = await axios.post('/auth', credentials);
    if (!res.status) {
      throw new Error(`${t('errors.loginToast')}`);
    }
    token.set(res.data.token);
    return res.data as IResult;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(`${t('errors.loginToast')}`);
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error(`${t('errors.loginToast')}`);
      throw new Error('');
    }
  }
});

export const logout = createAsyncThunk(
  'logout',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post(`${credentials}/logout`);
      token.unset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error as SerializedError);
      }
    }
  },
);
