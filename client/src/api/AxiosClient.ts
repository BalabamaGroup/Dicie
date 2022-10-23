import axios, { AxiosInstance } from "axios";
import { apiUrl } from "../utils/url";

axios.defaults.withCredentials = true;

class AxiosClient {
  host: AxiosInstance;

  constructor() {
    this.host = axios.create({
      baseURL: apiUrl(),
      responseType: "json",
      timeout: 30000,
    });
  }

  getResponseError = (res: any) => {
    if (!res) return;
    if (res.data && res.data.error) return res.data.error.message;
    if (res.isAxiosError && res.message) return res.message;
  };

  request = async (options: any) => {
    const token = sessionStorage.getItem("token");
    options.headers = { Authorization: `Bearer ${token}` };
    return this.host(options)
      .then((res: any) => {
        console.log(res);
        const error = this.getResponseError(res);
        if (error) throw new Error(error);
        if (!res || !res.data || res.isAxiosError) return null;
        return res.data;
      })
      .catch((err: any) => {
        console.log(err);
        let errText = err.response
          ? this.getResponseError(err.response)
          : err.message;
        if (err.response?.status === 401) {
          // this.request({
          //   method: "post",
          //   url: "auth/logout",
          // }).then(() => {
          window.location.href = "/signin";
          // });
        }
        return Promise.reject(errText || err);
      });
  };
}

export default AxiosClient;

// $authHost.interceptors.request.use((config) => {
//     config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
//     return config;
// });

// $authHost.interceptors.response.use(
//     (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (
//             error.response.status === 401 &&
//             error.config &&
//             !error.config._isRetry
//         ) {
//             originalRequest._isRetry = true;
//             try {
//                 const response = await axios.get(
//                     `${process.env.REACT_APP_API_URL}api/user/refresh`,
//                     { withCredentials: true }
//                 );
//                 localStorage.setItem("token", response.data.accessToken);
//                 return $authHost.request(originalRequest);
//             } catch (e) {
//                 console.log("Not authorized");
//             }
//         }
//         throw error;
//     }
// );
