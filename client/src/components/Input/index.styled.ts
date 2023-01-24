import styled, { css } from 'styled-components';

import { multiInputDataType } from '@/components/MultiInput';

import { InputThemeType } from './componentTheme';

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
    : ` .input_input-wrapper { border-radius: 0; }`;
};

const getMultiInputDataPaddingCss = (
  multiInputData: multiInputDataType | undefined,
  isNoteVisible: boolean | undefined
) => {
  if (!multiInputData) return ``;
  if (!multiInputData.isSeparate) return ` padding: 0;`;
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

export const Wrapper = styled.div<{
  multiInputData?: multiInputDataType | undefined;
  isNoteVisible: boolean | undefined;
  noteTextHeight: number;
  size: 'large' | 'medium';
  componentTheme: InputThemeType;
}>`
  max-width: 100%;
  flex-direction: column;
  height: auto;

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
  componentTheme: InputThemeType;
}>`
  cursor: pointer;
  position: relative;
  height: ${({ size }) => (size === 'large' ? '72px' : '48px')};

  z-index: 2;

  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: space-between;

  background: ${({ isVibrant, componentTheme }) =>
    !isVibrant ? componentTheme.background : componentTheme.backgroundVibrant};

  color: ${({ isFocus, isValid, componentTheme }) =>
    !isValid && !isFocus ? componentTheme.textInvalid : componentTheme.text};

  box-shadow: ${({ isFocus, isValid, componentTheme }) =>
    isFocus
      ? isValid
        ? componentTheme.shadow
        : componentTheme.shadowInvalid
      : `none`};
`;

export const FocusBorder = styled.div<{
  size: 'large' | 'medium';
  isFocus: boolean;
  isValid: boolean;
  withIcon: boolean;
  componentTheme: InputThemeType;
}>`
  height: 100%;
  width: 100%;
  padding: 2px;
  box-sizing: border-box;

  .focus-border {
    border-radius: ${({ withIcon }) => (withIcon ? '14px' : '14px')};
    box-shadow: ${({ isFocus, isValid, componentTheme }) =>
      isFocus
        ? isValid
          ? `inset 0px 0px 0px 1.5px #ab8af1`
          : `inset 0px 0px 0px 1.5px ${componentTheme.note.text}`
        : `none`};
  }
`;

export const Input = styled.input<{
  size: 'large' | 'medium';
  componentTheme: InputThemeType;
}>`
  all: unset;
  box-sizing: border-box;
  height: 100%;

  width: 100%;

  height: ${({ size }) => (size === 'large' ? '68px' : '44px')};
  font-weight: ${({ size }) => (size === 'large' ? '600' : '600')};
  font-size: ${({ size }) => (size === 'large' ? '18px' : '16px')};
  line-height: ${({ size }) => (size === 'large' ? '20px' : '20px')};
  padding: ${({ size }) => (size === 'large' ? '22px 30px' : '14px 24px')};
`;

export const Icon = styled.div<{
  size: 'large' | 'medium';
  componentTheme: InputThemeType;
}>`
  height: 20px;
  width: 20px;
  padding: ${({ size }) => (size === 'large' ? '26px' : '14px')};
  border-radius: 0 14px 14px 0;

  background-color: ${({ componentTheme }) => componentTheme.icon.background};

  background: ${({ componentTheme }) =>
    `linear-gradient(to right, ${componentTheme.icon.background} 50%, ${componentTheme.icon.backgroundHover} 50%) left`};
  background-size: 200%;

  &:hover {
    background-position: right;
    svg * {
      fill: ${({ componentTheme }) => componentTheme.icon.fillHover};
    }
  }

  svg {
    height: 20px;
    width: 20px;
    * {
      transition: all 0.1s ease-in-out;
      fill: ${({ componentTheme }) => componentTheme.icon.fill};
    }
  }
`;

export const Note = styled.div<{
  isVisible: boolean | undefined;
  componentTheme: InputThemeType;
}>`
  user-select: none;
  max-width: 100%;

  border-radius: 0 0 16px 16px;
  line-height: 20px;

  white-space: pre-line;
  ${({ isVisible }) =>
    isVisible
      ? css`
          transform: none;
          padding: 12px 32px 0px;
        `
      : css`
          transform: translateY(-100%);
          padding: 0 32px;
          color: transparent;
        `};
`;
