import AxiosClient from "./AxiosClient";

const client = new AxiosClient();

export const request = (options: any): any => {
  return client.request(options);
};
