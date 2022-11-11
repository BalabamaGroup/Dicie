import styled, { css } from 'styled-components';
import { multiInputDataType } from '@/MultiInput';

const getMultiInputDataBorderRadiusCss = (
  multiInputData: multiInputDataType | undefined
) => {
  if (!multiInputData) return ` .input_input-wrapper { border-radius: 16px; } `;
  return multiInputData.isSeparate
    ? ` .input_input-wrapper { border-radius: 16px; } `
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
  noteTextHeight: number
) => {
  return isNoteVisible
    ? ` height: calc(96px + ${noteTextHeight}px); `
    : ` height: 72px; `;
};

export const Wrapper = styled.div<{
  multiInputData?: multiInputDataType | undefined;
  isNoteVisible: boolean | undefined;
  noteTextHeight: number;
}>`
  max-width: 100%;
  flex-direction: column;
  height: auto;

  transition: all 0.2s ease-in-out;
  ${({ isNoteVisible, noteTextHeight }) =>
    getWrapperHeightDataCss(isNoteVisible, noteTextHeight)};

  ${({ multiInputData }) => getMultiInputDataBorderRadiusCss(multiInputData)}

  ${({ multiInputData, isNoteVisible }) =>
    getMultiInputDataPaddingCss(multiInputData, isNoteVisible)}
`;

export const InputWrapper = styled.div<{
  isFocus: boolean;
  isValid: boolean;
}>`
  cursor: pointer;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s ease-in-out;

  background: ${({ theme }) => theme.input.background};

  color: ${({ isFocus, isValid, theme }) =>
    !isValid && !isFocus ? theme.input.textInvalid : theme.input.text};

  box-shadow: ${({ isFocus, isValid, theme }) =>
    isFocus
      ? isValid
        ? theme.input.shadow
        : theme.input.shadowInvalid
      : `none`};
`;

export const Input = styled.input`
  all: unset;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  height: 20px;
  width: 100%;
  padding: 26px 32px 26px 32px;

  ::placeholder {
    color: ${({ theme }) => theme.input.placeholderText};
  }
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  padding: 26px 26px 26px 26px;
  border-radius: 0 14px 14px 0;

  background-color: ${({ theme }) => theme.input.icon.background};

  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.input.icon.background} 50%, ${theme.input.icon.backgroundHover} 50%) left`};
  background-size: 200%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-position: right;
    svg * {
      fill: ${({ theme }) => theme.input.icon.fillHover};
    }
  }

  svg {
    height: 20px;
    width: 20px;
    * {
      transition: all 0.1s ease-in-out;
      fill: ${({ theme }) => theme.input.icon.fill};
    }
  }
`;

export const Note = styled.div<{ isVisible: boolean | undefined }>`
  user-select: none;
  max-width: 100%;

  color: ${({ theme }) => theme.input.note.text};
  border-radius: 0 0 16px 16px;
  transition: all 0.2s ease-in-out;
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
        `};
`;
