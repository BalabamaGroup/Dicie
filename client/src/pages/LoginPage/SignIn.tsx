import { useState } from "react";
import { ROLE_TYPES } from "../consts";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
    role: ROLE_TYPES.USER,
  });

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInData({ ...signInData, username: e.target.value });

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInData({ ...signInData, email: e.target.value });

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignInData({ ...signInData, password: e.target.value });

  const onSignIn = () => {};

  return (
    <div>
      <input
        value={signInData.username}
        onChange={setUsername}
        placeholder="Username"
      />
      <input
        value={signInData.username}
        onChange={setEmail}
        placeholder="Email"
      />
      <input
        value={signInData.username}
        onChange={setPassword}
        placeholder="Password"
      />
      <button onClick={onSignIn}>Submit</button>
    </div>
  );
};

export default SignIn;
