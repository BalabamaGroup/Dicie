import axios, { AxiosInstance } from 'axios';

import routes from '@/common/constants/routes';
import { apiUrl } from '@/common/utils/url';
import Toast from '@/components/Toast';

import { useUserStore } from '../stores/UserStore';

axios.defaults.withCredentials = true;

class AxiosClient {
  host: AxiosInstance;

  constructor() {
    this.host = axios.create({
      baseURL: apiUrl(),
      responseType: 'json',
      timeout: 30000,
    });
  }

  request = async (options: any) => {
    const token = sessionStorage.getItem('token');
    if (token) options.headers = { Authorization: `Bearer ${token}` };
    return this.host(options)
      .then((res: any) => {
        // console.log(res);
        if (!res || !res.data || res.isAxiosError) return null;
        return res.data;
      })
      .catch((err: any) => {
        console.log(err);
        if (err.request?.responseText) {
          const errTextJSON = JSON.parse(err.request.responseText);
          Toast.error(errTextJSON.errorMessage);
        }
        if (err.response?.status === 401) {
          if (window.location.pathname !== routes.SIGN_IN)
            window.location.href = routes.SIGN_IN;
          else Toast.error('Could not authorize with provided data');
          sessionStorage.removeItem('token');
        }
        return Promise.reject(err);
      });
  };
}

export default AxiosClient;
