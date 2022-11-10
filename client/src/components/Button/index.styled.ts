import styled, { css } from 'styled-components';

export const Button = styled.button<{
  disabled: boolean | undefined;
  isScale: boolean | undefined;
}>`
  all: unset;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 24px 32px;

  background: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.text};

  border-radius: 16px;

  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  transition: all 0.2s ease-in-out;

  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  &:hover {
    box-shadow: ${({ theme }) => theme.button.shadow};
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
