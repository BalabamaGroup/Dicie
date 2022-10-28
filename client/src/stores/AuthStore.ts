import { action } from "mobx";

import AuthAPI from "../api/auth";
import {
  signInData,
  signUpData,
  takenSignUpInfoRes,
} from "../api/auth/interfaces";

export class AuthStore {
  @action signUp = async (data: signUpData) => {
    await AuthAPI.signUp(data);
    await this.signIn({
      username: data.username,
      password: data.password,
    });
  };

  @action signIn = async (data: signInData) => {
    const result = await AuthAPI.signIn(data);
    console.log(result);
    if (result.token) {
      sessionStorage.setItem("token", result.token);
      window.location.href = "/";
    }
  };

  @action signOut = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/auth/signin";
  };

  @action getTakenSignUpInfo = async (): Promise<takenSignUpInfoRes> => {
    const result = await AuthAPI.getTakenSignUpInfo();
    return result;
  };
}
