import { createRef, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { getTextHeight } from '@/common/helpers/domHelpers';
import { multiInputDataType } from '@/components/MultiInput';
import useComponentTheme from '@/hooks/useComponentTheme';

import { InputThemeDark, InputThemeLight, InputThemeType } from './componentTheme';
import * as Styled from './index.styled';

export interface InputProps {
  id?: string;
  className?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;

  theme?: 'auto' | 'light' | 'dark';
  size?: 'large' | 'medium';
  isVibrant?: boolean;

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
  id = 'input',
  className,
  type = 'text',
  label,
  placeholder = '',
  autoComplete = 'off',

  theme = 'auto',
  size = 'medium',
  isVibrant = false,

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
  const inputRef = createRef<HTMLInputElement>();

  const isMultiInputPart = !!multiInputData && !!onChangeMultiInputData;

  const componentTheme: InputThemeType = useComponentTheme(
    theme,
    InputThemeLight,
    InputThemeDark
  );

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

  const onInputMouseDown = (e: any) => e.preventDefault();

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
    <Styled.LabelWrapper className={`${className} label_wrapper`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Styled.Wrapper
        size={size}
        isNoteVisible={isFocus && !isValid}
        noteTextHeight={getTextHeight(currentNote, 20)}
        multiInputData={isMultiInputPart ? multiInputData : undefined}
        componentTheme={componentTheme}
      >
        <Styled.InputWrapper
          size={size}
          isVibrant={isVibrant}
          className='input_input-wrapper'
          onMouseDown={onInputMouseDown}
          isFocus={isFocus}
          isValid={isValid}
          withIcon={!!iconData}
          componentTheme={componentTheme}
        >
          <div className='focus-border-wrapper'>
            <div className='focus-border'>
              <input
                id={id}
                type={type}
                ref={inputRef}
                onClick={onInputClick}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className='input_input'
                placeholder={placeholder}
                autoComplete={autoComplete}
              />
            </div>
          </div>
          {iconData && (
            <Styled.Icon
              onClick={iconData.onClick}
              size={size}
              componentTheme={componentTheme}
            >
              <ReactSVG src={iconData.iconSrc} />
            </Styled.Icon>
          )}
        </Styled.InputWrapper>

        <Styled.Note
          className='input_note'
          onMouseDown={onInputMouseDown}
          isVisible={isFocus && !isValid}
          componentTheme={componentTheme}
        >
          {currentNote}
        </Styled.Note>
      </Styled.Wrapper>
    </Styled.LabelWrapper>
  );
};

export default Input;
