import styled, { css } from "styled-components";
import { multiInputDataType } from "../MultiInput";

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

const getValidationStylingDataCss = (isFocus: boolean, isValid: boolean) => {
  return isFocus && isValid
    ? ` box-shadow: 0px 4px 16px rgba(106, 101, 255, 0.25); `
    : isFocus && !isValid
    ? ` box-shadow: 0px 4px 8px rgba(252, 48, 87, 0.25); `
    : !isFocus && !isValid
    ? ` color: #e36b6b; `
    : ``;
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

  background-color: #fff;

  transition: all 0.2s ease-in-out;
  ${({ isFocus, isValid }) => getValidationStylingDataCss(isFocus, isValid)}
`;

export const Input = styled.input`
  all: unset;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  height: 20px;
  width: 100%;
  padding: 26px 32px 26px 32px;
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  padding: 26px 26px 26px 26px;
  border-radius: 0 16px 16px 0;

  background: #ffffff;

  background: linear-gradient(to right, #ffffff 50%, #8986f5 50%) left;
  background-size: 200%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-position: right;
    svg * {
      fill: #fff;
    }
  }

  svg {
    height: 20px;
    width: 20px;
    * {
      transition: all 0.2s ease-in-out;
      fill: #888888;
    }
  }
`;

export const Note = styled.div<{ isVisible: boolean | undefined }>`
  user-select: none;
  max-width: 100%;

  color: #000;
  border-radius: 0 0 16px 16px;
  transition: all 0.2s ease-in-out;
  line-height: 20px;

  color: #e36b6b;

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
