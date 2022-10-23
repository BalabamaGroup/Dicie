import { request } from "..";
import { signInData, signUpData } from "./interfaces";

export default class AuthAPI {
  static signUp = (data: signUpData) => {
    const options = {
      method: "post",
      url: `auth/signup`,
      data,
    };

    return request(options);
  };

  static getTakenSignUpInfo() {
    const options = {
      method: "get",
      url: `auth/existing_users`,
    };

    return request(options);
  }

  static signIn = (data: signInData) => {
    const options = {
      method: "post",
      url: `auth/signin`,
      data,
    };

    return request(options);
  };

  //   static async login(email, password) {
  //     const { data } = await $host.post("api/user/login", {
  //       email,
  //       password,
  //     });
  //     return data;
  //   }

  //   static async logout() {
  //     const { data } = await $authHost.post("api/user/logout");
  //     return data;
  //   }

  //   static async refresh() {
  //     const { data } = await $authHost.get("api/user/refresh");
  //     return data;
  //   }
}
