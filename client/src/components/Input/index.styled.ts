import styled, { css } from 'styled-components';

import { multiInputDataType } from '@/components/MultiInput';

const getMultiInputDataBorderRadiusCss = (
  multiInputData: multiInputDataType | undefined
) => {
  if (!multiInputData) return ` .input_input-wrapper { border-radius: 16px; } `;
  return multiInputData.isSeparate
    ? ` .input_input-wrapper { border-radius: 16px; }; z-index: 10;`
    : multiInputData.isTopSeparate
    ? ` .input_input-wrapper { border-radius: 16px 16px 0 0; } `
    : multiInputData.isBottomSeparate
    ? ` .input_input-wrapper { border-radius: 0 0 16px 16px; } `
    : ` .input_input-wrapper { border-radius: 0px; }`;
};

const getMultiInputDataPaddingCss = (
  multiInputData: multiInputDataType | undefined,
  isNoteVisible: boolean | undefined
) => {
  if (!multiInputData) return ``;
  if (!multiInputData.isSeparate) return ` padding: 0;`;
  if (multiInputData.index === multiInputData.length - 1)
    return ` padding: 16px 0 0 0 ;`;
  return isNoteVisible ? `  padding: 16px 0 0;` : ` padding: 16px 0;`;
};

const getWrapperHeightDataCss = (
  isNoteVisible: boolean | undefined,
  noteTextHeight: number,
  size: 'large' | 'medium'
) => {
  return isNoteVisible
    ? ` height: calc(96px + ${noteTextHeight}px); `
    : size === 'large'
    ? ` height: 72px; `
    : ` height : 48px `;
};

export const LabelWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Wrapper = styled.div<{
  multiInputData?: multiInputDataType | undefined;
  isNoteVisible: boolean | undefined;
  noteTextHeight: number;
  size: 'large' | 'medium';
}>`
  max-width: 100%;
  flex-direction: column;
  height: auto;

  transition: padding 0.2s ease-in-out, height 0.2s ease-in-out;
  .input_input-wrapper {
    transition: border-radius 0.2s;
  }

  ${({ isNoteVisible, noteTextHeight, size }) =>
    getWrapperHeightDataCss(isNoteVisible, noteTextHeight, size)};
  ${({ multiInputData }) => getMultiInputDataBorderRadiusCss(multiInputData)}
  ${({ multiInputData, isNoteVisible }) =>
    getMultiInputDataPaddingCss(multiInputData, isNoteVisible)}
`;

export const InputWrapper = styled.div<{
  isFocus: boolean;
  isValid: boolean;
  isVibrant: boolean;
  size: 'large' | 'medium';
  withIcon: boolean;
}>`
  cursor: text;
  position: relative;
  height: ${({ size }) => (size === 'large' ? '72px' : '48px')};
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  z-index: 2;

  background: ${({ isVibrant, theme }) =>
    !isVibrant ? theme.background : theme.backgroundVibrant};
  color: ${({ isFocus, isValid, theme }) =>
    !isValid && !isFocus ? theme.textInvalid : theme.text};
  box-shadow: ${({ isFocus, isValid, theme }) =>
    isFocus ? (isValid ? theme.shadow : theme.shadowInvalid) : `none`};

  .focus-border-wrapper {
    height: 100%;
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
    .focus-border {
      transition: box-shadow 0.2s ease-in-out;
      border-radius: ${({ withIcon }) => (withIcon ? '14px' : '14px')};
      box-shadow: ${({ isFocus, isValid, theme }) =>
        isFocus &&
        (isValid
          ? `inset 0px 0px 0px 1.5px ${theme.focusBorder}`
          : `inset 0px 0px 0px 1.5px ${theme.focusBorderInvalid}`)};
    }
  }

  .input_input {
    all: unset;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    transition: color 0.1s ease-in-out;
    height: ${({ size }) => (size === 'large' ? '68px' : '44px')};
    font-weight: ${({ size }) => (size === 'large' ? '600' : '600')};
    font-size: ${({ size }) => (size === 'large' ? '18px' : '16px')};
    line-height: ${({ size }) => (size === 'large' ? '20px' : '20px')};
    padding: ${({ size }) => (size === 'large' ? '22px 30px' : '14px 24px')};

    ::placeholder {
      color: ${({ theme }) => theme.textPlaceholder};
    }
  }
`;

export const Icon = styled.div<{
  size: 'large' | 'medium';
}>`
  cursor: pointer;
  min-height: 20px;
  min-width: 20px;
  height: 20px;
  width: 20px;
  padding: ${({ size }) => (size === 'large' ? '26px' : '14px')};
  border-radius: 6px 14px 14px 6px;
  background-color: ${({ theme }) => theme.icon.background};
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.icon.background} 50%, ${theme.icon.backgroundHover} 50%) left`};
  background-size: 200%;

  transition: background-position 0.2s ease-in-out;
  &:hover {
    background-position: right;
    svg * {
      fill: ${({ theme }) => theme.icon.fillHover};
    }
  }
  svg {
    height: 20px;
    width: 20px;
    * {
      transition: fill 0.1s ease-in-out;
      fill: ${({ theme }) => theme.icon.fill};
    }
  }
`;

export const Note = styled.div<{
  isVisible: boolean | undefined;
}>`
  z-index: 0;
  user-select: none;
  max-width: 100%;
  border-radius: 0 0 16px 16px;
  font-weight: 600;
  line-height: 20px;
  white-space: pre-line;
  transition: color 0.3s ease-in-out;

  ${({ isVisible, theme }) =>
    isVisible
      ? css`
          transform: none;
          padding: 12px 32px 0px;
          color: ${theme.textInvalid};
        `
      : css`
          transform: translateY(-100%);
          padding: 0 32px;
          color: transparent;
        `};
`;
