import { IState } from '../auth/authSelectors';

export const selectName = (state: IState) => {
  state.clients.info.name;
};

export const selectAllInfo = (state: IState) => {
  state.clients.info;
};

export {};
