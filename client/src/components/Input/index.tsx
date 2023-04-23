import { createRef, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import useThemeStore from 'stores/ThemeStore';

import { getTextHeight } from '@/common/helpers/domHelpers';
import useGameStore from '@/stores/GameStore';
import inputTheme from '@/styles/themes/componentThemes/inputTheme';

import * as Styled from './index.styled';
import { InputProps } from './interface';

const Input = ({
  id = 'input',
  className,
  type = 'text',
  autoComplete = 'off',

  label,
  placeholder = '',
  color = 'auto',
  size = 'medium',

  value,
  onChange,

  icon,
  onIconClick,

  isError = false,
  errorNote,

  multiInputData,
  onChangeMultiInputData,

  focusOnLoad = false,
}: InputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const [isFocus, setIsFocus] = useState(false);

  const globalTheme = useThemeStore((state) => state.theme);
  const gameStateColor = useGameStore((s) => s.getColor());
  const componentColor = !color || color === 'auto' ? gameStateColor : color;
  const componentTheme = inputTheme[globalTheme][componentColor];

  const onFocus = () => {
    multiInputData && onChangeMultiInputData && onChangeMultiInputData(true);
    setIsFocus(true);
  };

  const onBlur = () => {
    multiInputData && onChangeMultiInputData && onChangeMultiInputData(false);
    setIsFocus(false);
  };

  const onInputClick = () => {
    if (!inputRef?.current) return;
    inputRef.current.focus();
    onFocus();
  };

  useEffect(() => {
    if (focusOnLoad && inputRef?.current) inputRef.current.focus();
  }, []);

  return (
    <Styled.LabelWrapper
      className={`${className} label_wrapper`}
      size={size}
      theme={componentTheme}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <Styled.Wrapper
        size={size}
        isNoteVisible={isFocus && isError && !!errorNote}
        noteTextHeight={getTextHeight(errorNote || '', 20)}
        multiInputData={multiInputData}
        theme={componentTheme}
      >
        <Styled.InputWrapper
          size={size}
          className='input_input-wrapper'
          isFocus={isFocus}
          isError={isError}
          withIcon={!!icon}
          theme={componentTheme}
          multiInputData={multiInputData}
        >
          <Styled.FocusRing
            className='focus-ring'
            multiInputData={multiInputData}
            size={size}
            isFocus={isFocus}
            isError={isError}
            withIcon={!!icon}
            theme={componentTheme}
          />
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
          {icon && (
            <Styled.Icon
              onClick={onIconClick}
              size={size}
              theme={componentTheme}
              onMouseDown={(e: any) => {
                e.preventDefault();
              }}
            >
              <ReactSVG className='icon' src={icon} />
            </Styled.Icon>
          )}
        </Styled.InputWrapper>

        <Styled.Note
          className='input_note'
          onMouseDown={(e: any) => {
            e.preventDefault();
          }}
          isVisible={isFocus && isError && !!errorNote}
          theme={componentTheme}
        >
          {errorNote}
        </Styled.Note>
      </Styled.Wrapper>
    </Styled.LabelWrapper>
  );
};

export default Input;
