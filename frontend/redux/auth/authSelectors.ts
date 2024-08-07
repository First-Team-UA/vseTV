export interface IState {
  clients: {
    info: {
      name: string;
      contact_email_tech: string;
      contact_email_fin: string;
      contact_tel_tech: string;
      contact_tel_fin: string;
      active: number;
      password?: string;
    };
  };
  auth: {
    id: string;
    token: string | null;
    error: null | string;
    isAuthenticated: boolean;
    isLoadingServer: boolean;
  };
}

export const selectAuthToken = (state: IState) => state.auth.token;
export const selectID = (state: IState) => state.auth.id;
export const selectIsAuthenticated = (state: IState) =>
  state.auth.isAuthenticated;
export const selectIsLoading = (state: IState) => state.auth.isLoadingServer;
export const selectAuthError = (state: IState) => state.auth.error;
