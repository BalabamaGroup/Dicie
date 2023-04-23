import styled, { css } from 'styled-components';

import { multiInputDataType } from '@/components/MultiInput';

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
  size: 'large' | 'medium',
  multiInputData: multiInputDataType | undefined
) => {
  const height = size === 'large' ? '72px' : '48px';
  const miPadding = multiInputData?.isSeparate && isNoteVisible ? 20 : 0;

  return isNoteVisible
    ? ` height: calc(${height} + ${miPadding}px + ${noteTextHeight}px); `
    : size === 'large'
    ? ` height: calc(${height} + ${miPadding}px); `
    : ` height : calc(${height} + ${miPadding}px);`;
};

export const LabelWrapper = styled.div<{
  size: 'large' | 'medium';
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    /* margin-left: 8px; */
    cursor: pointer;
    color: ${({ theme }) => theme.labelText};
    font-size: ${({ size }) => (size === 'large' ? '14px' : '14px')};
    line-height: ${({ size }) => (size === 'large' ? '14px' : '14px')};
    font-weight: 700;
  }
`;

export const Wrapper = styled.div<{
  multiInputData?: multiInputDataType | undefined;
  isNoteVisible: boolean | undefined;
  noteTextHeight: number;
  size: 'large' | 'medium';
}>`
  z-index: ${({ multiInputData }) =>
    multiInputData && multiInputData.isSeparate ? 10 : 0};

  max-width: 100%;
  flex-direction: column;
  height: auto;

  transition: padding 0.2s ease-in-out, height 0.2s ease-in-out;

  ${({ isNoteVisible, noteTextHeight, size, multiInputData }) =>
    getWrapperHeightDataCss(
      isNoteVisible,
      noteTextHeight,
      size,
      multiInputData
    )};
  ${({ multiInputData, isNoteVisible }) =>
    getMultiInputDataPaddingCss(multiInputData, isNoteVisible)}
`;

export const InputWrapper = styled.div<{
  isFocus: boolean;
  isError: boolean;
  size: 'large' | 'medium';
  withIcon: boolean;
  multiInputData: multiInputDataType | undefined;
}>`
  position: relative;
  cursor: text;
  z-index: 2;
  position: relative;
  height: ${({ size }) => (size === 'large' ? '72px' : '48px')};
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.1s ease-in-out, color 0.2s ease-in-out,
    background 0.3s ease-in-out,
    box-shadow 0.2s ease-in-out border-radius 0.175s ease-in-out;

  background: ${({ theme }) => theme.background};
  color: ${({ isFocus, isError, theme }) =>
    isError && !isFocus ? theme.textInvalid : theme.text};

  box-shadow: 0 4px 16px
    ${({ isFocus, isError, theme }) =>
      isFocus
        ? !isError
          ? theme.shadowRGBA
          : theme.shadowInvalidRGBA
        : `none`};

  border-radius: ${({ multiInputData }) =>
    //prettier-ignore
    !multiInputData? '16px'
    : multiInputData.isSeparate ? '16px'
    : multiInputData.isTopSeparate ? '16px 16px 0 0'
    : multiInputData.isBottomSeparate ? '0 0 16px 16px'
    : '0px'};

  ${({ isFocus, multiInputData }) =>
    !isFocus &&
    !multiInputData &&
    css`
      &:hover {
        .focus-ring {
          color: ${({ theme }) => theme.borderHover};
        }
      }
    `}

  .input_input {
    z-index: 11;
    all: unset;
    box-sizing: border-box;
    width: 100%;
    transition: color 0.1s ease-in-out;

    height: ${({ size }) => (size === 'large' ? '72px' : '48px')};
    font-weight: ${({ size }) => (size === 'large' ? '600' : '600')};
    font-size: ${({ size }) => (size === 'large' ? '20px' : '16px')};
    line-height: ${({ size }) => (size === 'large' ? '20px' : '16px')};
    padding: ${({ size }) => (size === 'large' ? '26px' : '16px')};

    ::placeholder {
      transition: color 0.2s ease-in-out;
      color: ${({ theme }) => theme.textPlaceholder};
    }
  }
`;

export const FocusRing = styled.div<{
  isFocus: boolean;
  isError: boolean;
  withIcon: boolean;
  size: 'large' | 'medium';
  multiInputData: multiInputDataType | undefined;
}>`
  pointer-events: none;

  top: ${({ isFocus }) => (isFocus ? '2.5px' : '0px')};
  left: ${({ isFocus }) => (isFocus ? '2.5px' : '0px')};
  bottom: ${({ isFocus }) => (isFocus ? '2px' : '0px')};
  right: ${({ isFocus, withIcon, size }) =>
    isFocus
      ? withIcon
        ? size === 'large'
          ? '72px'
          : '48px'
        : '2px'
      : '0px'};

  position: absolute;
  box-sizing: border-box;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out,
    top 0.15s ease-in-out, right 0.15s ease-in-out, bottom 0.15s ease-in-out,
    left 0.15s ease-in-out;
  border-radius: 14px;

  box-shadow: inset 0px 0px 0px
    ${({ size }) => (size === 'large' ? '2px' : '1.5px')};

  color: ${({ isFocus, isError, multiInputData, theme }) =>
    !isFocus
      ? !multiInputData
        ? theme.border
        : 'transparent'
      : !isError
      ? theme.focusBorder
      : theme.focusBorderInvalid};
`;

export const Icon = styled.div<{
  size: 'large' | 'medium';
}>`
  cursor: pointer;
  box-sizing: border-box;
  min-height: ${({ size }) => (size === 'large' ? '72px' : '48px')};
  min-width: ${({ size }) => (size === 'large' ? '72px' : '48px')};
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    height: ${({ size }) => (size === 'large' ? '20px' : '16px')};
    width: ${({ size }) => (size === 'large' ? '20px' : '16px')};
    svg {
      height: ${({ size }) => (size === 'large' ? '20px' : '16px')};
      width: ${({ size }) => (size === 'large' ? '20px' : '16px')};
      * {
        transition: fill 0.1s ease-in-out;
        fill: ${({ theme }) => theme.icon.fill};
      }
    }
  }

  &:hover {
    svg * {
      fill: ${({ theme }) => theme.icon.fillHover};
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
