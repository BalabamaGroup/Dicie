import { request } from '..';
import User from '@/app/common/types/user';

export default class AuthAPI {
  static signUp = async (data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }): Promise<User> => {
    const options = {
      method: 'post',
      url: `auth/signup`,
      data,
    };

    return request(options).then((res: Promise<User>) => res);
  };

  static getTakenSignUpInfo = async (): Promise<
    [{ username: string; email: string }]
  > => {
    const options = {
      method: 'get',
      url: `auth/existing_users`,
    };

    return request(options).then(
      (res: Promise<[{ username: string; email: string }]>) => res
    );
  };

  static signIn = async (data: {
    username: string;
    password: string;
  }): Promise<User> => {
    const options = {
      method: 'post',
      url: `auth/signin`,
      data,
    };

    return request(options).then((res: Promise<User>) => res);
  };
}
