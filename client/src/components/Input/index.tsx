import { createRef, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { getTextHeight } from '@/common/helpers/domHelpers';
import { multiInputDataType } from '@/components/MultiInput';

import * as Styled from './index.styled';

export interface InputProps {
  id: string;
  className?: string;
  type?: string;
  placeholder?: string;

  size?: 'large' | 'medium';
  variant?: 'default' | 'vibrant';

  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  iconData?: {
    iconSrc: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  };

  focusOnLoad?: boolean;

  isValid?: boolean;
  setIsValid?: Function;
  validationData?: { regex: RegExp; note: string };
  existanceData?: { values: Array<string>; note: string };
  customTest?: { test: Function; note: string };
  customDependancies?: Array<any>;

  multiInputData?: multiInputDataType;
  multiInputDataIndex?: number;
  onChangeMultiInputData?: Function;
}

const Input = ({
  id,
  className,
  type = 'text',
  placeholder = '',
  size = 'medium',
  variant = 'default',

  value,
  onChange,

  iconData,

  isValid = true,
  setIsValid,

  validationData,
  existanceData,
  customTest,
  customDependancies,

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

  const [currentNote, setCurrentNote] = useState('');

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

  let dependancies = [value];
  if (customDependancies) dependancies = [dependancies, ...customDependancies];

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
    else if (customTest && !isCustomTestValid) setCurrentNote(customTest.note);
    else if (existanceData && !isExistanceValid)
      setCurrentNote(existanceData.note);

    setIsValid(isExistanceValid && isRegexValid && isCustomTestValid);
  }, dependancies);

  return (
    <Styled.Wrapper
      className={`${className} input_wrapper`}
      variant={variant}
      isNoteVisible={isFocus && !isValid}
      noteTextHeight={getTextHeight(currentNote, 20)}
      multiInputData={isMultiInputPart ? multiInputData : undefined}
    >
      <Styled.InputWrapper
        variant={variant}
        className='input_input-wrapper'
        id={id}
        onMouseDown={onInputMouseDown}
        isFocus={isFocus}
        isValid={isValid}
      >
        <Styled.Input
          type={type}
          size={size}
          className='input_input'
          placeholder={placeholder}
          ref={inputRef}
          value={value}
          onClick={onInputClick}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {iconData && (
          <Styled.Icon className='input_icon' onClick={iconData.onClick}>
            <ReactSVG src={iconData.iconSrc} />
          </Styled.Icon>
        )}
      </Styled.InputWrapper>

      <Styled.Note
        className='input_note'
        onMouseDown={onInputMouseDown}
        isVisible={isFocus && !isValid}
      >
        {currentNote}
      </Styled.Note>
    </Styled.Wrapper>
  );
};

export default Input;
