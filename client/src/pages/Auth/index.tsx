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
        <img src="/pngs/auth-picture.png" alt="" />
      </Styled.AuthPicture>

      <Styled.AuthContent>
        <Switch
          className="auth_switch"
          options={[
            {
              id: "signup",
              label: "Sign Up",
              onClick: () => {
                navigate(routes.SIGN_UP);
              },
              defaultChoice: formType === "signUp",
            },
            {
              id: "signin",
              label: "Sign In",
              onClick: () => {
                navigate(routes.SIGN_IN);
              },
              defaultChoice: formType === "signIn",
            },
          ]}
        />

        <AuthForm type={formType} />
      </Styled.AuthContent>
    </Styled.SignUp>
  );
};

export default SignUp;
