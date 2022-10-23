import { request } from "..";

import {
  signInData,
  signInRes,
  signUpData,
  signUpRes,
  takenSignUpInfoRes,
} from "./interfaces";

export default class AuthAPI {
  static signUp = (data: signUpData): signUpRes => {
    const options = {
      method: "post",
      url: `auth/signup`,
      data,
    };

    return request(options).then((res: signUpRes) => res);
  };

  static getTakenSignUpInfo = (): takenSignUpInfoRes => {
    const options = {
      method: "get",
      url: `auth/existing_users`,
    };

    return request(options).then((res: takenSignUpInfoRes) => res);
  };

  static signIn = (data: signInData): signInRes => {
    const options = {
      method: "post",
      url: `auth/signin`,
      data,
    };

    return request(options).then((res: signInRes) => res);
  };
}
