export interface IState {
  clients: {
    info: {};
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
