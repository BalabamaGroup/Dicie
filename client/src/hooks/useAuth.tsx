import { useNavigate } from "react-router-dom";

import AuthAPI from "../api/auth";
import routes from "../common/constants/routes";

const useAuth = () => {
  const navigate = useNavigate();

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
