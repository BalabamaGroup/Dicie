import { inject } from "mobx-react";
import { useState } from "react";

interface signInData {
  signIn?: Function;
}

const SignIn = ({ signIn }: signInData) => {
  const [username, setUsername] = useState("");
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const [password, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn && signIn({ username, password });
  };

  return (
    <form>
      <input
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
      <input
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default inject(({ authStore }) => {
  const { signIn } = authStore;
  return { signIn };
})(SignIn);
