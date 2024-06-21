import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'http://localhost:4000/clients';

interface IClient {
  id: number;
  name: string;
  contact_email_tech: string;
  contact_email_fin: string;
  contact_tel_tech: string;
  contact_tel_fin: string;
  token: string;
  active: number;
  password?: string;
}

interface IUpdate {
  contact_email_tech?: string;
  contact_email_fin?: string;
  contact_tel_tech?: string;
  contact_tel_fin?: string;
}
interface IUpdatePass{
  password: string;
  newPassword:string
}

const getClientInfo = async (id: string) => {
  try {
    const result: AxiosResponse<IClient> = await axios.get(`${BASE_URL}/${id}`);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

const changeClientInfo = async (id: string, update: IUpdate) => {
  try {
    const result: AxiosResponse<IUpdate> = await axios.patch(
      `${BASE_URL}/${id}`,
      update,
    );
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

const changePassword = async (id: string, update:IUpdatePass) => {
    try {
        await axios.patch(`${BASE_URL}${id}/password`, update)
    } catch (error) {
        if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
    }
}

const profileAPI = {
    getClientInfo,
    changeClientInfo,
    changePassword
}

export default profileAPI
