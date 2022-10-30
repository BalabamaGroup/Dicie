import { request } from "..";
import User from "../../common/types/user";

import { signInData, signUpData } from "./interfaces";

export default class AuthAPI {
  static signUp = async (data: signUpData): Promise<User> => {
    const options = {
      method: "post",
      url: `auth/signup`,
      data,
    };

    return request(options).then((res: Promise<User>) => res);
  };

  static getTakenSignUpInfo = async (): Promise<
    [{ username: string; email: string }]
  > => {
    const options = {
      method: "get",
      url: `auth/existing_users`,
    };

    return request(options).then(
      (res: Promise<[{ username: string; email: string }]>) => res
    );
  };

  static signIn = async (data: signInData): Promise<User> => {
    const options = {
      method: "post",
      url: `auth/signin`,
      data,
    };

    return request(options).then((res: Promise<User>) => res);
  };
}
