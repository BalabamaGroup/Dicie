import { useNavigate } from "react-router-dom";

import AuthAPI from "../api/auth";
import routes from "../common/constants/routes";
import { signInData, signUpData } from "../api/auth/interfaces";

const useAuth = () => {
  const navigate = useNavigate();

  const signUp = async (data: signUpData) => {
    await AuthAPI.signUp(data);
    await signIn({
      username: data.username,
      password: data.password,
    });
  };

  const signIn = async (data: signInData) => {
    AuthAPI.signIn(data).then((res) => {
      console.log("AAAAAAAAAA", res);
      sessionStorage.setItem("id", `${res.id}`);
      res.token && sessionStorage.setItem("token", res.token);
      navigate(routes.HOME);
    });
  };

  const signOut = () => {
    sessionStorage.removeItem("token");
    navigate(routes.SIGN_IN);
  };

  return { signUp, signIn, signOut };
};

export default useAuth;
