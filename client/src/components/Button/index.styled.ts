import styled, { css } from 'styled-components';

export const Button = styled.button<{
  disabled: boolean;
  isScale: boolean;
  size: 'large' | 'medium' | 'small';
  isPrimary: boolean;
}>`
  all: unset;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};
  transition: box-shadow 0.175s ease-in, background 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  // DEFAULT
  ${({ theme }) => css`
    background: ${theme.background};
    color: ${theme.text};
    &:hover {
      box-shadow: ${theme.shadow};
    }
    &:active {
      box-shadow: ${theme.shadowPrimary},
        inset 0px 0px 0px 2px ${theme.activeBorderPrimary};
    }
  `}

  // PRIMARY
  ${({ isPrimary, theme }) =>
    isPrimary &&
    css`
      background: ${theme.backgroundPrimary};
      color: ${theme.textPrimary};
      &:hover {
        box-shadow: ${theme.shadowPrimary};
      }
      &:active {
        box-shadow: ${theme.shadowPrimary},
          inset 0px 0px 0px 2px ${theme.activeBorderPrimary};
      }
    `}

  ${({ size }) =>
    size === 'large'
      ? css`
          padding: 24px 32px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 20px;
          line-height: 20px;
        `
      : size === 'medium'
      ? css`
          padding: 16px 24px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 16px;
          line-height: 16px;
        `
      : css`
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 12px;
          line-height: 12px;
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.25;
      pointer-events: none;
    `};
`;
