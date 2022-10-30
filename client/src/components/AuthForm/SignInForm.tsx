import React from "react";
import { inject } from "mobx-react";

import { RoleTypes } from "../../common/constants";

import * as Styled from "./index.styled";
import Input from "../Input";
import MultiInput from "../MultiInput";
import Button from "../Button";

interface signInProps {
  signIn?: Function;

  username: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  password: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

const SignInForm = ({ username, password, signIn }: signInProps) => {
  const onSignIn = async (e: any) => {
    e.preventDefault();
    signIn &&
      (await signIn({
        username: username.value,
        password: password.value,
      }));
  };

  return (
    <Styled.AuthForm>
      <Styled.AuthHeader>
        <div className="main">Welcome back</div>
        <div className="subheader">You’ve been missed!</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={2}>
        <MultiInput className="auth_multiinput" scale={true}>
          <Input
            id={"signUp-username"}
            key={"signUp-username"}
            placeholder="Username"
            value={username.value}
            onChange={username.onChange}
          />
          <Input
            id={"signUp-username"}
            key={"signUp-passsword"}
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button scale={true} onClick={onSignIn}>
        Sign In
      </Button>
    </Styled.AuthForm>
  );
};

export default inject(({ authStore }) => {
  const { signIn } = authStore;
  return {
    signIn,
  };
})(SignInForm);
