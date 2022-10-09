import React, { useState, createRef, useEffect } from "react";
import ValidationInput from "../../components/ValidationInput";
import axios from "../../api/axios";

const SignUpPage = () => {
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

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/signup",
        JSON.stringify({
          username,
          password,
          email: "aa@mail.ru",
          role: "ROLE_USER",
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  return (
    <section>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <ValidationInput.UsernameInput
          id={"username"}
          username={username}
          onChange={onChangeUsername}
          isValid={usernameIsValid}
          setIsValid={setUsernameIsValid}
          focusOnLoad
        />

        <ValidationInput.EmailInput
          id={"email"}
          email={email}
          onChange={onChangeEmail}
          isValid={emailIsValid}
          setIsValid={setEmailIsValid}
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

        <p
          ref={errorRef}
          className={errorMessage ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>

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

export default SignUpPage;
