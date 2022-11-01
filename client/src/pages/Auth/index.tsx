import { inject } from "mobx-react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../common/constants/routes";
import AuthForm from "../../components/AuthForm";

import Switch from "../../components/Switch";

import * as Styled from "./index.styled";

const SignUp = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const formType = location.pathname === routes.SIGN_UP ? "signUp" : "signIn";

  return (
    <Styled.SignUp>
      <Styled.AuthPicture>
        <img src="/images/auth-picture.png" alt="" />
      </Styled.AuthPicture>

      <Styled.AuthContent>
        <Switch
          className="auth_switch"
          options={[
            {
              id: "signup",
              label: "Sign Up",
              onClick: () => {
                navigate("/auth/signup");
              },
              defaultChoice: true,
            },
            {
              id: "signin",
              label: "Sign In",
              onClick: () => {
                navigate("/auth/signin");
              },
            },
          ]}
        />

        <AuthForm type={formType} />
      </Styled.AuthContent>
    </Styled.SignUp>
  );
};

export default inject(({ authStore }) => {
  const { signUp, getTakenSignUpInfo } = authStore;
  return {
    signUp,
    getTakenSignUpInfo,
  };
})(SignUp);
