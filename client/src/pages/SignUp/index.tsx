import React, { useState, createRef, useEffect, useCallback } from "react";
import { inject } from "mobx-react";

import ValidationInput from "../../components/ValidationInput";
import { RoleTypes } from "../../constants";

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

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [matchPasswordIsValid, setMatchPasswordIsValid] = useState(false);

  const [takenUsernames, setTakenUsernames] = useState<string[]>([]);
  const [takenEmails, setTakenEmails] = useState<string[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response =
      signUp &&
      (await signUp({
        username,
        password,
        email,
        role: RoleTypes.USER,
      }));
    console.log(response);
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
    <section>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} noValidate>
        <ValidationInput.UsernameInput
          id={"username"}
          username={username}
          onChange={onChangeUsername}
          isValid={usernameIsValid}
          setIsValid={setUsernameIsValid}
          takenUsernames={takenUsernames}
          focusOnLoad
        />

        <ValidationInput.EmailInput
          id={"email"}
          email={email}
          onChange={onChangeEmail}
          isValid={emailIsValid}
          setIsValid={setEmailIsValid}
          takenEmails={takenEmails}
        />

        <ValidationInput.PasswordInput
          id={"password"}
          password={password}
          onChange={onChangePassword}
          isValid={passwordIsValid}
          setIsValid={setPasswordIsValid}
          isValidMatch={matchPasswordIsValid}
          setIsValidMatch={setMatchPasswordIsValid}
        />

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
    </section>
  );
};

export default inject(({ authStore }) => {
  const { signUp, getTakenSignUpInfo } = authStore;
  return {
    signUp,
    getTakenSignUpInfo,
  };
})(SignUp);
