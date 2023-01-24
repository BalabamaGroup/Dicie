import styled, { css } from 'styled-components';

export const Button = styled.button<{
  disabled: boolean;
  isScale: boolean;
  size: 'large' | 'medium' | 'small';
  isPrimary: boolean;
  isOutline: boolean;
  componentTheme: any;
}>`
  all: unset;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  text-align: center;

  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  // DEFAULT
  ${({ componentTheme }) => css`
    background: ${componentTheme.background};
    color: ${componentTheme.text};
    &:hover {
      box-shadow: ${componentTheme.shadow};
    }
    &:active {
      transition: box-shadow 0.05s ease-in, background 0.1s ease-in-out;
      box-shadow: ${componentTheme.shadowPrimary},
        inset 0px 0px 0px 2px ${componentTheme.borderOutline};
    }
  `}

  // PRIMARY
  ${({ isPrimary, componentTheme }) =>
    isPrimary &&
    css`
      background: ${componentTheme.backgroundPrimary};
      color: ${componentTheme.textPrimary};
      &:hover {
        box-shadow: ${componentTheme.shadowPrimary};
      }
      &:active {
        box-shadow: ${componentTheme.shadowPrimary},
          inset 0px 0px 0px 2px ${componentTheme.borderOutline};
      }
    `}

  // OUTLINE
  ${({ isOutline, isPrimary, componentTheme }) =>
    isOutline &&
    !isPrimary &&
    css`
      background: none;
      color: ${componentTheme.textOutline};
      box-shadow: inset 0px 0px 0px 2px ${componentTheme.borderOutline};
      &:hover {
        box-shadow: inset 0px 0px 0px 2px ${componentTheme.borderOutline};
        background: rgba(255, 255, 255, 0.25);
      }
      &:active {
        background: rgba(255, 255, 255, 0.15);
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
      opacity: 0.5;
      pointer-events: none;
    `};
`;
