import { request } from '..';
import User from '@/app/common/types/user';

import { getUsersRes, getUserByIdRes } from './interfaces';

export default class UserAPI {
  static getUsers = (): getUsersRes => {
    const options = {
      method: 'post',
      url: `user`,
    };

    return request(options).then((res: getUsersRes) => res);
  };

  static getCurrentUser = (): User => {
    const options = {
      method: 'get',
      url: `user/current`,
    };

    return request(options).then((res: User) => res);
  };

  static getUserById = (id: number): getUserByIdRes => {
    const options = {
      method: 'post',
      url: `user/${id}`,
    };

    return request(options).then((res: getUserByIdRes) => res);
  };

  static deleteUserById = (id: number): void => {
    const options = {
      method: 'delete',
      url: `user/${id}`,
    };

    return request(options).then((res: void) => res);
  };
}
