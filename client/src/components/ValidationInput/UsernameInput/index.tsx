import { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StyledInput } from "../StyledInput";

export interface UsernameInputProps {
  id: string;
  username: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isValid: boolean;
  setIsValid: Function;
  focusOnLoad?: boolean;
}
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const UsernameInput = ({
  id,
  username,
  onChange,
  isValid,
  setIsValid,
  focusOnLoad = false,
}: UsernameInputProps) => {
  const usernameRef = createRef<HTMLInputElement>();

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  useEffect(() => {
    if (focusOnLoad && usernameRef?.current) usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setIsValid(USERNAME_REGEX.test(username));
  }, [username, setIsValid]);

  return (
    <StyledInput>
      <label htmlFor={id}>
        {"Username: "}
        <ReactSVG
          className={isValid ? "valid" : "hide"}
          src={"/images/check.react.svg"}
          wrapper={"span"}
        />
        <ReactSVG
          className={isValid || !username ? "hide" : "invalid"}
          src={"/images/cross.react.svg"}
          wrapper={"span"}
        />
      </label>
      <input
        id={id}
        ref={usernameRef}
        type={"text"}
        required
        placeholder={"Username"}
        autoComplete={"off"}
        aria-invalid={isValid ? "false" : "true"}
        aria-describedby={`${id}-instructions`}
        value={username}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <p
        id={`${id}-instructions`}
        className={isFocus && !isValid ? "instructions" : "offscreen"}
      >
        <ReactSVG
          className={isValid || !username ? "hide" : "invalid"}
          src={"/images/info.react.svg"}
          wrapper={"span"}
        />
        4 to 24 characters.
        <br />
        Must begin with a letter.
        <br />
        Letters, nubmbers, underscores, hyphens allowed.
      </p>
    </StyledInput>
  );
};

export default UsernameInput;
