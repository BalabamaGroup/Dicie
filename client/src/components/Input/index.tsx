import { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import * as Styled from "./index.styled";

import { getTextHeight } from "../../common/helpers/domHelpers";

import { multiInputDataType } from "../MultiInput";

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

  customTest?: {
    test: Function;
    note: string;
  };

  multiInputData?: multiInputDataType;
  multiInputDataIndex?: number;
  onChangeMultiInputData?: Function;

  focusOnLoad?: boolean;
}

const Input = ({
  id,
  placeholder,
  value,
  onChange,

  isValid = true,
  setIsValid,

  validationData,
  existanceData,
  customTest,

  multiInputData,
  onChangeMultiInputData,

  focusOnLoad = false,
}: InputProps) => {
  const isMultiInputPart = !!multiInputData && !!onChangeMultiInputData;

  const inputRef = createRef<HTMLInputElement>();

  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => {
    setIsFocus(true);
    isMultiInputPart && onChangeMultiInputData(true);
  };
  const onBlur = () => {
    setIsFocus(false);
    isMultiInputPart && onChangeMultiInputData(false);
  };

  const [currentNote, setCurrentNote] = useState("");

  const onInputClick = () => {
    if (!inputRef?.current) return;
    inputRef.current.focus();
    onFocus();
  };

  const onInputMouseDown = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (focusOnLoad && inputRef && inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isValid === undefined || !setIsValid) return;

    let isRegexValid = true;
    if (validationData) isRegexValid = validationData.regex.test(value);

    let isExistanceValid = true;
    if (existanceData)
      isExistanceValid = !existanceData.values.find((ev) => value === ev);

    let isCustomTestValid = true;
    if (customTest) isCustomTestValid = customTest.test();

    if (validationData && !isRegexValid) setCurrentNote(validationData.note);
    else if (customTest && isCustomTestValid) setCurrentNote(customTest.note);
    else if (existanceData && isExistanceValid)
      setCurrentNote(existanceData.note);

    setIsValid(isExistanceValid && isRegexValid && isCustomTestValid);
  }, [value]);

  return (
    <Styled.Wrapper
      className="input_wrapper"
      isNoteVisible={isFocus && !isValid}
      noteTextHeight={getTextHeight(currentNote, 20)}
      multiInputData={isMultiInputPart ? multiInputData : undefined}
    >
      <Styled.InputWrapper
        className="input_input-wrapper"
        id={id}
        onClick={onInputClick}
        onMouseDown={onInputMouseDown}
        isFocus={isFocus}
        isValid={isValid}
      >
        <Styled.Input
          className="input_input"
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Styled.Icon className="input_icon">
          <ReactSVG src="/images/cross.react.svg" />
        </Styled.Icon>
      </Styled.InputWrapper>

      <Styled.Note
        className="input_note"
        onMouseDown={onInputMouseDown}
        isVisible={isFocus && !isValid}
      >
        {currentNote}
      </Styled.Note>
    </Styled.Wrapper>
  );
};

export default Input;
