import { IResult, login, logout } from './authOperations';
import { PayloadAction, createSlice, SerializedError } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface IInitital {
  id: string;
  token: string | null;
  error: null | string | SerializedError;
  isAuthenticated: boolean;
  isLoadingServer: boolean;
}

const initialState: IInitital = {
  id: '',
  token: null,
  error: null,
  isAuthenticated: false,
  //   isFetchingCurrentUser: false,
  isLoadingServer: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setID(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isAuthenticated = false;
        state.isLoadingServer = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IResult>) => {
        if (action.payload) {
          state.id = action.payload.id;
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.isLoadingServer = false;
          state.error = null;
        }
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<SerializedError | undefined>) => {
          state.isAuthenticated = false;
          if (action.payload) {
            state.error = action.payload;
          }
        },
      )
      .addCase(logout.pending, state => {
        state.isAuthenticated = false;
        state.isLoadingServer = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, state => {
        state.isAuthenticated = false;
      });
  },
});

export const { setID } = authSlice.actions;
export default authSlice.reducer;
export const authReducer = authSlice.reducer;
