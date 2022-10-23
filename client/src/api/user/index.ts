import { request } from "..";

import { getUsersRes, getCurrentUserRes, getUserByIdRes } from "./interfaces";

export default class UserAPI {
  static getUsers = (): getUsersRes => {
    const options = {
      method: "post",
      url: `user`,
    };

    return request(options).then((res: getUsersRes) => res);
  };

  static getCurrentUser = (): getCurrentUserRes => {
    const options = {
      method: "get",
      url: `user/current`,
    };

    return request(options).then((res: getCurrentUserRes) => res);
  };

  static getUserById = (id: number): getUserByIdRes => {
    const options = {
      method: "post",
      url: `user/${id}`,
    };

    return request(options).then((res: getUserByIdRes) => res);
  };

  static deleteUserById = (id: number): void => {
    const options = {
      method: "delete",
      url: `user/${id}`,
    };

    return request(options).then((res: void) => res);
  };
}
