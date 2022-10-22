import { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StyledValidationInput } from "../StyledValidationInput";

export interface UsernameInputProps {
  id: string;
  username: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isValid: boolean;
  setIsValid: Function;
  takenUsernames?: string[];
  focusOnLoad?: boolean;
}
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const usernameInstructions = (
  <span>
    4 to 24 characters.
    <br />
    Must begin with a letter.
    <br />
    Letters, nubmbers, underscores, hyphens allowed.
  </span>
);

const usernameIsTaken = <span>Username is taken</span>;

const UsernameInput = ({
  id,
  username,
  onChange,
  isValid,
  setIsValid,
  takenUsernames = [],
  focusOnLoad = false,
}: UsernameInputProps) => {
  const usernameRef = createRef<HTMLInputElement>();

  const [message, setMessage] = useState<React.ReactNode | null>(null);

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  useEffect(() => {
    if (focusOnLoad && usernameRef?.current) usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const isRegexValid = USERNAME_REGEX.test(username);
    const isTaken = takenUsernames.find((takenUN) => username === takenUN);
    setIsValid(isRegexValid && !isTaken);
    setMessage(isTaken ? usernameIsTaken : usernameInstructions);
  }, [username, setIsValid, takenUsernames]);

  return (
    <StyledValidationInput>
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
        {message}
      </p>
    </StyledValidationInput>
  );
};

export default UsernameInput;
