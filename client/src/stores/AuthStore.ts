import { action } from "mobx";
import AuthAPI from "../api/Auth";

import {
  signUpData,
  signUpRes,
  signInData,
  signInRes,
  takenSignUpInfoRes,
} from "../api/Auth/interfaces";

export class AuthStore {
  @action signUp = async (data: signUpData): Promise<signUpRes> => {
    const result = await AuthAPI.signUp(data);
    await this.signIn({
      username: data.username,
      password: data.password,
    });
    return result;
  };

  @action signIn = async (data: signInData): Promise<signInRes> => {
    const result = await AuthAPI.signIn(data);
    console.log(result);
    sessionStorage.setItem("token", result.token);
    return result;
  };

  @action getTakenSignUpInfo = async (): Promise<takenSignUpInfoRes> => {
    return await AuthAPI.getTakenSignUpInfo();
  };
}
