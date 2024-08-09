import { setIsLoadingServer, setError } from '../auth/authSlice';
import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export interface IProfileResult {
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  active: number;
  password?: string;
}
interface IRequestPayload {
  id: number;
}
export interface IUpdProfile {
  contact_email_tech?: string;
  contact_email_fin?: string;
  contact_tel_tech?: string;
  contact_tel_fin?: string;
  id?: number;
}
export interface IUpdPassPayload {
  newPassword: string;
  oldPassword: string;
  id: number;
}

export const getAllClients = createAsyncThunk<
  IProfileResult,
  void,
  { rejectValue: SerializedError }
>('getAll', async (_, { rejectWithValue, dispatch }) => {
  dispatch(setIsLoadingServer(true));
  try {
    const res: AxiosResponse<IProfileResult> = await axios.get(
      '/api/clients/admin/clients',
    );
    if (res.status !== 200) {
      throw new Error('');
    }

    console.log(res);
    return res.data as IProfileResult;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Something went wrong');
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error('Something went wrong');
      throw new Error('');
    }
  } finally {
    dispatch(setIsLoadingServer(false));
  }
});

export const getInfoClient = createAsyncThunk<
  IProfileResult,
  IRequestPayload,
  { rejectValue: SerializedError }
>('getInfoClient', async (credentials, { rejectWithValue, dispatch }) => {
  dispatch(setIsLoadingServer(true));
  try {
    const res: AxiosResponse<IProfileResult> = await axios.get(
      `/api/clients/${credentials.id}`,
    );
    if (res.status !== 200) {
      throw new Error('');
    }

    return res.data as IProfileResult;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Something went wrong');
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error('Something went wrong');
      throw new Error('');
    }
  } finally {
    dispatch(setIsLoadingServer(false));
  }
});

export const updateInfo = createAsyncThunk<
  IUpdProfile,
  IUpdProfile,
  { rejectValue: SerializedError }
>('updateInfo', async (credentials, { rejectWithValue, dispatch }) => {
  dispatch(setIsLoadingServer(true));
  try {
    const res: AxiosResponse<IUpdProfile> = await axios.patch(
      `/api/clients/${credentials.id}`,
      credentials,
    );
    if (res.status !== 200) {
      throw new Error('');
    }
    return res.data as IUpdProfile;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Something went wrong');
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error('Something went wrong');
      throw new Error('');
    }
  } finally {
    dispatch(setIsLoadingServer(false));
  }
});

export const updatePassword = createAsyncThunk<
  void,
  IUpdPassPayload,
  { rejectValue: SerializedError }
>('updatePass', async (credntials, { rejectWithValue, dispatch }) => {
  dispatch(setIsLoadingServer(true));
  try {
    const res = await axios.patch(
      `/api/clients/${credntials.id}/password`,
      credntials,
    );
    if (res.status !== 200) {
      throw new Error('');
    }
    toast.success(`${res.data}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error('Something went wrong');
      return rejectWithValue(error as SerializedError);
    } else {
      toast.error('Something went wrong');
      throw new Error('');
    }
  } finally {
    dispatch(setIsLoadingServer(false));
  }
});
