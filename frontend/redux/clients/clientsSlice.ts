import {
  IUpdProfile,
  IProfileResult,
  getAllClients,
  getInfoClient,
  updateInfo,
  updatePassword,
} from './clientsOperations';
import { PayloadAction, createSlice, SerializedError } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface IInitital {
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  active: number;
  password?: string;
}
interface IRequestPayload {
  isLoading: boolean;
}
const initialState: IInitital = {
  name: ' ',
  contact_email_tech: ' ',
  contact_email_fin: ' ',
  contact_tel_tech: ' ',
  contact_tel_fin: ' ',
  active: 1,
  password: ' ',
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllClients.pending, state => {
      state;
    });
  },
});
