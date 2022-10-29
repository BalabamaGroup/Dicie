import React, { useState, createRef, useEffect, useCallback } from "react";
import { inject } from "mobx-react";

import ValidationInput from "../../components/ValidationInput";
import { RoleTypes } from "../../common/constants";
import * as Styled from "./index.styled";
import Input from "../../components/Input";
import {
  getEmailValidationData,
  getMatchPasswordValidationData,
  getPasswordValidationData,
  getUsernameValidationData,
} from "../../common/utils/validation";
import MultiInput from "../../components/MultiInput";

interface signUpData {
  signUp?: Function;
  getTakenSignUpInfo?: Function;
}

const SignUp = ({ signUp, getTakenSignUpInfo }: signUpData) => {
  const errorRef = createRef<HTMLParagraphElement>();

  const [username, setUsername] = useState("");
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const [email, setEmail] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const [matchPassword, setMatchPassword] = useState("");
  const onChangeMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMatchPassword(e.target.value);

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [matchPasswordIsValid, setMatchPasswordIsValid] = useState(false);

  const [takenUsernames, setTakenUsernames] = useState<string[]>([]);
  const [takenEmails, setTakenEmails] = useState<string[]>([]);

  const userameValidationData = getUsernameValidationData();
  const emailValidationData = getEmailValidationData();
  const passwordValidationData = getPasswordValidationData();
  const matchPasswordValidationData = getMatchPasswordValidationData();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    signUp &&
      (await signUp({
        username,
        password,
        email,
        role: RoleTypes.USER,
      }));
  };

  const getExistingUsersInfo = useCallback(async () => {
    const takenSignUpInfo = getTakenSignUpInfo && (await getTakenSignUpInfo());

    const usernames: string[] = [];
    const emails: string[] = [];

    takenSignUpInfo.forEach((signUpInfo: any) => {
      usernames.push(signUpInfo.username);
      emails.push(signUpInfo.email);
    });

    setTakenUsernames(usernames);
    setTakenEmails(emails);
  }, [getTakenSignUpInfo]);

  useEffect(() => {
    getExistingUsersInfo();
  }, []);

  return (
    <Styled.SignUp>
      <Styled.AuthPicture />

      <Styled.AuthContent>
        <MultiInput>
          <Input
            id={"signUp-username"}
            key={"signUp-username"}
            placeholder="Username"
            value={username}
            onChange={onChangeUsername}
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
            value={email}
            onChange={onChangeEmail}
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
            value={password}
            onChange={onChangePassword}
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
            value={matchPassword}
            onChange={onChangeMatchPassword}
            isValid={matchPasswordIsValid}
            setIsValid={setMatchPasswordIsValid}
            customTest={{
              test: () => password === matchPassword,
              ...matchPasswordValidationData.custom,
            }}
          />
        </MultiInput>

        <form onSubmit={handleSubmit} noValidate>
          <button
          // disabled={
          //   !usernameIsValid ||
          //   !passwordIsValid ||
          //   !matchPasswordIsValid ||
          //   !emailIsValid
          // }
          >
            Sign Up
          </button>
        </form>
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
