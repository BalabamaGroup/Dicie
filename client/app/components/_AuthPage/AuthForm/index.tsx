import React, { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface AuthFormProps {
  type: "signUp" | "signIn";
}

const AuthForm = ({ type }: AuthFormProps) => {
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

  switch (type) {
    case "signUp":
      return (
        <SignUpForm
          username={{ value: username, onChange: onChangeUsername }}
          email={{ value: email, onChange: onChangeEmail }}
          password={{ value: password, onChange: onChangePassword }}
          matchPassword={{
            value: matchPassword,
            onChange: onChangeMatchPassword,
          }}
        />
      );
    case "signIn":
      return (
        <SignInForm
          username={{ value: username, onChange: onChangeUsername }}
          password={{ value: password, onChange: onChangePassword }}
        />
      );
  }
};

export default AuthForm;
