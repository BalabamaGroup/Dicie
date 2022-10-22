import AxiosClient from "./AxiosClient";

const client = new AxiosClient();

export const request = (options: any) => {
  return client.request(options);
};

// export const setWithCredentialsStatus = (state) => {
//   return client.setWithCredentialsStatus(state);
// };
