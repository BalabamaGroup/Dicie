import { User } from '@/common/types/user';

import { request } from '../';
import { getUserByIdRes, getUsersRes } from './interfaces';

export default class UserAPI {
  static getUsers = (): getUsersRes => {
    const options = {
      method: 'post',
      url: `user`,
    };

    return request(options).then((res: getUsersRes) => res);
  };

  static getCurrentUser = async (): Promise<User> => {
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

  static getLeaderboard = async (): Promise<User[]> => {
    const options = {
      method: 'get',
      url: `user/leaderboard`,
    };

    return request(options).then((res: Promise<User[]>) => res);
  };

  static deleteUserById = (id: number): void => {
    const options = {
      method: 'delete',
      url: `user/${id}`,
    };

    return request(options).then((res: void) => res);
  };
}
