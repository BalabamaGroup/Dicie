import axios, { AxiosInstance } from 'axios';

import { apiUrl } from '@/common/utils/url';
import Toast from '@/components/Toast';

axios.defaults.withCredentials = true;

class AxiosClient {
  host: AxiosInstance;

  constructor() {
    this.host = axios.create({
      baseURL: apiUrl,
      responseType: 'json',
      timeout: 30000,
    });
  }

  request = async (options: any) => {
    const token = sessionStorage.getItem('token');
    if (token) options.headers = { Authorization: `Bearer ${token}` };
    return this.host(options)
      .then((res: any) => {
        if (!res || !res.data || res.isAxiosError) return null;
        return res.data;
      })
      .catch((err: any) => {
        if (err.request?.responseText) {
          const errTextJSON = JSON.parse(err.request.responseText);
          Toast.error(errTextJSON.errorMessage);
        }
        return Promise.reject(err);
      });
  };
}

export default AxiosClient;
