import React, { useState, createRef } from "react";
import { inject } from "mobx-react";

import { RoleTypes } from "../../common/constants";
import {
  getEmailValidationData,
  getMatchPasswordValidationData,
  getPasswordValidationData,
  getUsernameValidationData,
} from "../../common/utils/validation";

import * as Styled from "./index.styled";
import Input from "../Input";
import MultiInput from "../MultiInput";
import Button from "../Button";
import { useQuery } from "react-query";
import AuthAPI from "../../api/auth";

interface signUpProps {
  signUp?: Function;

  username: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  email: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  password: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  matchPassword: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

const SignUpForm = ({
  username,
  email,
  password,
  matchPassword,
  signUp,
}: signUpProps) => {
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [matchPasswordIsValid, setMatchPasswordIsValid] = useState(true);

  const [takenUsernames, setTakenUsernames] = useState<string[]>([]);
  const [takenEmails, setTakenEmails] = useState<string[]>([]);

  const userameValidationData = getUsernameValidationData();
  const emailValidationData = getEmailValidationData();
  const passwordValidationData = getPasswordValidationData();
  const matchPasswordValidationData = getMatchPasswordValidationData();

  const onSignUp = async (e: any) => {
    e.preventDefault();
    signUp &&
      signUp({
        username: username.value,
        password: password.value,
        email: email.value,
        role: RoleTypes.USER,
      });
  };

  useQuery("takenSignUpInfo", async () => {
    const takenSignUpInfo = await AuthAPI.getTakenSignUpInfo();

    const usernames: string[] = [];
    const emails: string[] = [];

    takenSignUpInfo.forEach(
      (signUpInfo: { username: string; email: string }) => {
        usernames.push(signUpInfo.username);
        emails.push(signUpInfo.email);
      }
    );

    setTakenUsernames(usernames);
    setTakenEmails(emails);
  });

  return (
    <Styled.AuthForm>
      <Styled.AuthHeader>
        <div className="main">
          Welcome to <span className="colored">Aspid</span>
        </div>
        <div className="subheader">Become the true embodiment of darkness</div>
        <div className="subheader">And there are also party games</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={4}>
        <MultiInput className="auth_multiinput" scale={true}>
          <Input
            id={"signUp-username"}
            key={"signUp-username"}
            placeholder="Username"
            value={username.value}
            onChange={username.onChange}
            isValid={usernameIsValid}
            setIsValid={setUsernameIsValid}
            validationData={{
              ...userameValidationData.validation,
            }}
            existanceData={{
              values: takenUsernames,
              ...userameValidationData.existance,
            }}
          />

          <Input
            id={"signUp-email"}
            key={"signUp-email"}
            placeholder="Email"
            value={email.value}
            onChange={email.onChange}
            isValid={emailIsValid}
            setIsValid={setEmailIsValid}
            validationData={{
              ...emailValidationData.validation,
            }}
            existanceData={{
              values: takenEmails,
              ...emailValidationData.existance,
            }}
          />

          <Input
            id={"signUp-username"}
            key={"signUp-passsword"}
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
            isValid={passwordIsValid}
            setIsValid={setPasswordIsValid}
            validationData={{
              ...passwordValidationData.validation,
            }}
          />

          <Input
            id={"signUp-email"}
            key={"signUp-passsword-repeat"}
            placeholder="Repeat password"
            value={matchPassword.value}
            onChange={matchPassword.onChange}
            isValid={matchPasswordIsValid}
            setIsValid={setMatchPasswordIsValid}
            customTest={{
              test: () => password.value === matchPassword.value,
              ...matchPasswordValidationData.custom,
            }}
            customDependancies={[password.value]}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button
        scale={true}
        onClick={onSignUp}
        // disabled={
        //   !usernameIsValid ||
        //   !passwordIsValid ||
        //   !matchPasswordIsValid ||
        //   !emailIsValid
        // }
      >
        Sign Up
      </Button>
    </Styled.AuthForm>
  );
};

export default inject(({ authStore }) => {
  const { signUp, getTakenSignUpInfo } = authStore;
  return {
    signUp,
    getTakenSignUpInfo,
  };
})(SignUpForm);
