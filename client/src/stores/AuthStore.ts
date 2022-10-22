import { observable, action } from "mobx";
import UserAPI from "../api/AuthAPI";

import {
  signInProps,
  signUpProps,
  takenSignUpInfo,
  signInResponse,
  signUpResponse,
} from "./../api/AuthAPI/interfaces";

export interface IAuthStore {}

export class AuthStore {
  @action signUp = async (data: signUpProps): Promise<signUpResponse> => {
    const result = await UserAPI.signUp(data);
    await this.signIn({
      username: result.username,
      password: data.password,
    });
    return result;
  };

  @action signIn = async (data: signInProps): Promise<signInResponse> => {
    const result = await UserAPI.signIn(data);
    console.log(result);
    sessionStorage.setItem("token", result.token);
    return result;
  };

  @action getTakenSignUpInfo = async (): Promise<takenSignUpInfo> => {
    return await UserAPI.getTakenSignUpInfo();
  };
}
