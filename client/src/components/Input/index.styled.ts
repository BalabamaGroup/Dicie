import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  isNoteVisible: boolean | undefined;
  noteTextHeight: number;
}>`
  max-width: 100%;
  flex-direction: column;
  height: auto;

  transition: all 0.2s ease-out;

  ${({ isNoteVisible, noteTextHeight }) =>
    !isNoteVisible
      ? `
          height: 72px;
        `
      : `
          height: calc(96px + ${noteTextHeight}px);
        `};
`;

export const InputWrapper = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  padding: 26px 32px;

  background-color: #fff;
  border-radius: 16px;
`;

export const Input = styled.input`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  all: unset;
  height: 20px;
  width: 100%;
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const NoteWrapper = styled.div<{ isVisible: boolean | undefined }>`
  user-select: none;
  max-width: 100%;

  color: #000;
  border-radius: 0 0 16px 16px;
  transition: all 0.2s ease-out;
  line-height: 20px;

  white-space: pre-line;
  ${({ isVisible }) =>
    isVisible
      ? css`
          transform: none;
          padding: 12px 32px;
        `
      : css`
          transform: translateY(-100%);
          padding: 0 32px;
        `};
`;
