import { action } from "mobx";
import AuthAPI from "../api/Auth";

import {
  signInProps,
  signUpProps,
  takenSignUpInfo,
  signInResponse,
  signUpResponse,
} from "../api/Auth/interfaces";

export class AuthStore {
  @action signUp = async (data: signUpProps): Promise<signUpResponse> => {
    const result = await AuthAPI.signUp(data);
    await this.signIn({
      username: data.username,
      password: data.password,
    });
    return result;
  };

  @action signIn = async (data: signInProps): Promise<signInResponse> => {
    const result = await AuthAPI.signIn(data);
    console.log(result);
    sessionStorage.setItem("token", result.token);
    return result;
  };

  @action getTakenSignUpInfo = async (): Promise<takenSignUpInfo> => {
    return await AuthAPI.getTakenSignUpInfo();
  };
}
