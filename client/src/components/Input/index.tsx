import eyeClosed from 'images/svgs/eye.closed.svg.png';
import eyeOpened from 'images/svgs/eye.opened.svg.png';
import { createRef, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useThemeStore } from 'stores/ThemeStore';

import { getTextHeight } from '@/common/helpers/domHelpers';
import inputTheme from '@/styles/themes/componentThemes/inputTheme';

import * as Styled from './index.styled';
import { InputProps } from './interface';
import useInputValidation from './useInputValidation';

const Input = ({
  id = 'input',
  className,
  type = 'text',
  label,
  placeholder = '',
  autoComplete = 'off',
  color,
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

  const [isFocus, setIsFocus] = useState(false);
  const [currentNote, setCurrentNote] = useState('');

  let theme = useThemeStore((state) => state.theme);
  const componentTheme = inputTheme[theme][color];

  const isMultiInputPart = !!multiInputData && !!onChangeMultiInputData;

  const onFocus = () => {
    setIsFocus(true);
    isMultiInputPart && onChangeMultiInputData(true);
  };

  const onBlur = () => {
    setIsFocus(false);
    isMultiInputPart && onChangeMultiInputData(false);
  };

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

  useInputValidation({
    inputValue: value,
    setCurrentNote,
    isValid,
    setIsValid,
    validationData,
    existanceData,
    customTest,
    customDependancies,
  });

  return (
    <Styled.LabelWrapper className={`${className} label_wrapper`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Styled.Wrapper
        size={size}
        isNoteVisible={isFocus && !isValid}
        noteTextHeight={getTextHeight(currentNote, 20)}
        multiInputData={multiInputData}
        theme={componentTheme}
      >
        <Styled.InputWrapper
          size={size}
          isVibrant={isVibrant}
          className='input_input-wrapper'
          onMouseDown={onInputMouseDown}
          isFocus={isFocus}
          isValid={isValid}
          withIcon={!!iconData}
          theme={componentTheme}
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
              theme={componentTheme}
            >
              <ReactSVG src={iconData.iconSrc} />
            </Styled.Icon>
          )}
        </Styled.InputWrapper>

        <Styled.Note
          className='input_note'
          onMouseDown={onInputMouseDown}
          isVisible={isFocus && !isValid}
          theme={componentTheme}
        >
          {currentNote}
        </Styled.Note>
      </Styled.Wrapper>
    </Styled.LabelWrapper>
  );
};

export default Input;
