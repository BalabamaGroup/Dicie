import styled, { css } from "styled-components";

export const Button = styled.button<{
  disabled: boolean | undefined;
  scale: boolean | undefined;
}>`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 24px 32px;

  background: #8986f5;
  color: #ffffff;
  border-radius: 16px;

  font-family: "Quicksand";
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  transition: all 0.2s ease-in-out;

  width: ${({ scale }) => (scale ? "100%" : "auto")};

  &:hover {
    box-shadow: 0px 8px 32px rgba(106, 101, 255, 0.5);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.5;
      &:hover {
        box-shadow: none;
      }
    `};
`;
