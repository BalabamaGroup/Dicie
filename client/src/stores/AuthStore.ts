import { action } from "mobx";

import AuthAPI from "../api/auth";
import {
  signInData,
  signInRes,
  signUpData,
  signUpRes,
  takenSignUpInfoRes,
} from "../api/auth/interfaces";

export class AuthStore {
  @action signUp = async (data: signUpData): Promise<signUpRes> => {
    const result = AuthAPI.signUp(data);
    this.signIn({
      username: data.username,
      password: data.password,
    });
    return result;
  };

  @action signIn = async (data: signInData): Promise<signInRes> => {
    const result = AuthAPI.signIn(data);
    console.log(result);
    sessionStorage.setItem("token", result.token);
    return result;
  };

  @action getTakenSignUpInfo = async (): Promise<takenSignUpInfoRes> => {
    return AuthAPI.getTakenSignUpInfo();
  };
}
