import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StyledValidationInput } from "../index.styled";

export interface PasswordInputProps {
  id: string;
  password: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isValid: boolean;
  setIsValid: Function;
  isValidMatch: boolean;
  setIsValidMatch: Function;
}
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const PasswordInput = ({
  id,
  password,
  onChange,
  isValid,
  setIsValid,
  isValidMatch,
  setIsValidMatch,
}: PasswordInputProps) => {
  const [matchPassword, setMatchPassword] = useState("");
  const onChangeMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMatchPassword(e.target.value);

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const [isFocusMatch, setIsFocusMatch] = useState(false);
  const onFocusMatch = () => setIsFocusMatch(true);
  const onBlurMatch = () => setIsFocusMatch(false);

  useEffect(() => {
    setIsValid(PASSWORD_REGEX.test(password));
    setIsValidMatch(password === matchPassword);
  }, [password, matchPassword, setIsValid, setIsValidMatch]);

  return (
    <>
      <div>
        <label htmlFor={id}>
          {"Password: "}
          <ReactSVG
            className={isValid ? "valid" : "hide"}
            src={"/images/check.react.svg"}
            wrapper={"span"}
          />
          <ReactSVG
            className={isValid || !password ? "hide" : "invalid"}
            src={"/images/cross.react.svg"}
            wrapper={"span"}
          />
        </label>
        <input
          id={id}
          type={"password"}
          value={password}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required
          aria-invalid={isValid ? "false" : "true"}
          aria-describedby={`${id}-instructions`}
          autoComplete="off"
        />
        <p
          id={`${id}-instructions`}
          className={isFocus && !isValid ? "instructions" : "offscreen"}
        >
          <ReactSVG src={"/images/info.react.svg"} wrapper={"span"} />
          Minimum eight characters, at least one uppercase letter, one lowercase
          letter and one number
        </p>
      </div>

      <StyledValidationInput>
        <label htmlFor={`${id}-match`}>
          {"Confirm Password: "}
          <ReactSVG
            className={isValidMatch && matchPassword ? "valid" : "hide"}
            src={"/images/check.react.svg"}
            wrapper={"span"}
          />
          <ReactSVG
            className={isValidMatch || !matchPassword ? "hide" : "invalid"}
            src={"/images/cross.react.svg"}
            wrapper={"span"}
          />
        </label>
        <input
          id={`${id}-match`}
          type={"password"}
          value={matchPassword}
          onChange={onChangeMatchPassword}
          onFocus={onFocusMatch}
          onBlur={onBlurMatch}
          required
          aria-invalid={isValidMatch ? "false" : "true"}
          aria-describedby={`${id}-match-instructions`}
          autoComplete="off"
        />
        <p
          id={`${id}-instructions`}
          className={
            isFocusMatch && !isValidMatch ? "instructions" : "offscreen"
          }
        >
          <ReactSVG src={"/images/info.react.svg"} wrapper={"span"} />
          Must match the first password input field.
        </p>
      </StyledValidationInput>
    </>
  );
};

export default PasswordInput;
