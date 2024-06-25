import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'http://localhost:4000/auth';
export interface IResult {
  id: string;
  token: string;
  refreshtoken?: string;
}

const LogIn = async (login: string, password: string) => {
  const dataObj = {
    login,
    password,
  };
  try {
    const result: AxiosResponse<IResult> = await axios.post(
      `${BASE_URL}`,
      dataObj,
    );
    if (!result) {
      console.log(`something went wrong with login`);
    }
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

const LogOut = async (id: string) => {
  try {
    await axios.post(`${BASE_URL}/${id}/logout`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export const authAPI = {
  LogIn,
  LogOut,
};
