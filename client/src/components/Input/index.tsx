import { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { getTextHeight } from "../../common/helpers/domHelpers";
import * as Styled from "./index.styled";

export interface InputProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  isValid?: boolean;
  setIsValid?: Function;

  validationData?: {
    regex: RegExp;
    note: string;
  };

  existanceData?: {
    values: Array<string>;
    note: string;
  };

  focusOnLoad?: boolean;
}

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const Input = ({
  id,
  value,
  placeholder,
  onChange,

  isValid,
  setIsValid,

  validationData,
  existanceData,

  focusOnLoad,
}: InputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const [currentNote, setCurrentNote] = useState("");

  console.log(getTextHeight(currentNote, 20));

  const onInputClick = () => {
    if (!inputRef?.current) return;
    inputRef.current.focus();
    onFocus();
  };

  const onInputMouseDown = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (focusOnLoad && inputRef?.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    let isRegexValid = true;
    if (validationData) isRegexValid = validationData.regex.test(value);

    let isTaken = true;
    if (existanceData)
      isTaken = !!existanceData.values.find((ev) => value === ev);

    if (validationData && !isRegexValid) setCurrentNote(validationData?.note);
    else if (existanceData && isTaken) setCurrentNote(existanceData?.note);
    setIsValid && setIsValid(!isTaken && isRegexValid);
  }, [value, existanceData, validationData]);

  return (
    <Styled.Wrapper
      isNoteVisible={isFocus && !isValid}
      noteTextHeight={getTextHeight(currentNote, 20)}
    >
      <Styled.InputWrapper
        id={id}
        onClick={onInputClick}
        onMouseDown={onInputMouseDown}
      >
        <Styled.Input
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Styled.Icon>
          <ReactSVG src="/images/cross.react.svg" />
        </Styled.Icon>
      </Styled.InputWrapper>

      <Styled.NoteWrapper
        onMouseDown={onInputMouseDown}
        isVisible={isFocus && !isValid}
      >
        {currentNote}
      </Styled.NoteWrapper>
    </Styled.Wrapper>
  );
};

export default Input;
