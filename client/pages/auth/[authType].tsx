import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import * as Styled from "./index.styled";

import Switch from "../../app/components/Switch";
import AuthForm from "../../app/components/AuthForm";
import useTheme from "../../app/hooks/useTheme";

const Auth = () => {
  const router = useRouter();
  console.log(router.query.authType);

  const authType = router.query.authType === "signup" ? "signUp" : "signIn";

  const { getTheme } = useTheme();
  const theme = "dark";

  useEffect(() => {
    router.prefetch(authType === "signUp" ? "/auth/signin" : "/auth/signup");
  }, []);

  return (
    <Styled.Auth>
      <Styled.AuthPicture>
        <Image
          layout="fill"
          objectFit="cover"
          src={`/images/pngs/auth-picture.${theme}.png`}
          alt="Auth Picture"
        />
      </Styled.AuthPicture>

      <Styled.AuthContent>
        <Switch
          className="auth_switch"
          options={[
            {
              id: "signup",
              label: "Sign Up",
              onClick: () => {
                router.push("/auth/signup");
              },
              defaultChoice: authType === "signUp",
            },
            {
              id: "signin",
              label: "Sign In",
              onClick: () => {
                router.push("/auth/signin");
              },
              defaultChoice: authType === "signIn",
            },
          ]}
        />

        <AuthForm type={authType} />
      </Styled.AuthContent>
    </Styled.Auth>
  );
};

export default Auth;
