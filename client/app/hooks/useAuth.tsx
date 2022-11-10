import { useRouter } from "next/router";
import AuthAPI from "../../app/api/auth";

import routes from "../../app/common/constants/routes";

const useAuth = () => {
  const router = useRouter();

  const signUp = async (data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }) => {
    await AuthAPI.signUp(data);
    await signIn({
      username: data.username,
      password: data.password,
    });
  };

  const signIn = async (data: { username: string; password: string }) => {
    AuthAPI.signIn(data)
      .then((res) => {
        sessionStorage.setItem("id", `${res.id}`);
        res.token && sessionStorage.setItem("token", res.token);
        router.push(routes.HOME);
      })
      .catch(() => {});
  };

  const getTakenSignUpInfo = async () => {
    const result = await AuthAPI.getTakenSignUpInfo();
    return result;
  };

  const signOut = () => {
    sessionStorage.removeItem("token");
    router.push(routes.SIGN_IN);
  };

  return { signUp, signIn, signOut, getTakenSignUpInfo };
};

export default useAuth;
