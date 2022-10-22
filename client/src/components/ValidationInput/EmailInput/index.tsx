import { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StyledValidationInput } from "../StyledValidationInput";

export interface EmailInputProps {
  id: string;
  email: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isValid: boolean;
  setIsValid: Function;
  takenEmails: string[];
}
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailInstructions = <span>I dunno what to write here</span>;

const emailIsTaken = <span>Email is taken</span>;

const EmailInput = ({
  id,
  email,
  onChange,
  isValid,
  setIsValid,
  takenEmails,
}: EmailInputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const [message, setMessage] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const isRegexValid = EMAIL_REGEX.test(email);
    const isTaken = takenEmails.find((takenEmail) => email === takenEmail);
    setIsValid(isRegexValid && !isTaken);
    setMessage(isTaken ? emailIsTaken : emailInstructions);
  }, [email, setIsValid, takenEmails]);

  return (
    <StyledValidationInput>
      <label htmlFor={id}>
        {"Email: "}
        <ReactSVG
          className={isValid ? "valid" : "hide"}
          src={"/images/check.react.svg"}
          wrapper={"span"}
        />
        <ReactSVG
          className={isValid || !email ? "hide" : "invalid"}
          src={"/images/cross.react.svg"}
          wrapper={"span"}
        />
      </label>
      <input
        id={id}
        type={"email"}
        required
        placeholder={"Email"}
        aria-invalid={isValid ? "false" : "true"}
        aria-describedby={`${id}-instructions`}
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <p
        id={`${id}-instructions`}
        className={isFocus && !isValid ? "instructions" : "offscreen"}
      >
        <ReactSVG
          className={isValid || !email ? "hide" : "invalid"}
          src={"/images/info.react.svg"}
          wrapper={"span"}
        />
        {message}
      </p>
    </StyledValidationInput>
  );
};

export default EmailInput;
