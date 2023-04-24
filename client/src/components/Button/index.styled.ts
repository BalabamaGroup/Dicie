import styled, { css } from 'styled-components';

export const Button = styled.button<{
  disabled: boolean;
  isScale: boolean;
  size: 'large' | 'medium' | 'small';
  isPrimary: boolean;
  singleChild: boolean;
}>`
  all: unset;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ singleChild }) =>
    singleChild ? 'center' : 'space-between'};

  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  ${({ size }) =>
    size === 'large'
      ? css`
          border: 2px solid transparent;
          height: 72px;
          padding: 22px 33px;
          border-radius: 16px;
          font-weight: 800;
          font-size: 20px;
          line-height: 20px;
          border-radius: 16px;
          svg {
            width: 24px;
            height: 24px;
          }
        `
      : size === 'medium'
      ? css`
          border: 1.5px solid transparent;

          height: 48px;
          padding: 16px 24px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          border-radius: 12px;
          svg {
            width: 20px;
            height: 20px;
          }
        `
      : css`
          border: 1px solid transparent;
          height: 32px;
          padding: 8px 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 12px;
          line-height: 12px;
          border-radius: 8px;
          svg {
            width: 16px;
            height: 16px;
          }
        `}

  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  transform: perspective(1px) translateZ(0);
  -webkit-filter: blur(0);
  filter: blur(0px);

  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out, box-shadow 0.175s ease-in-out,
    background 0.3s ease-in-out, border-color 0.175s ease-in-out,
    color 0.3s ease-in-out, opacity 0.2s ease-in-out;

  // DEFAULT
  ${({ isPrimary, theme }) =>
    !isPrimary &&
    //prettier-ignore
    css`
      background: ${theme.default.background};
      border-color: ${theme.default.border};
      color: ${theme.default.text};
      svg { path { fill: ${theme.default.text}; } }
      &:hover {
        border-color: ${theme.default.borderHover};
        box-shadow: 0px 4px 16px ${theme.default.shadowHoverRGBA};
      }
      &:active { transform: scale(0.98); }

      /* ${isSuccess &&
      css`
      border-color: ${theme.default.success.border};
      color: ${theme.default.success.text};
      &:hover {
        border-color: ${theme.default.success.borderHover};
        box-shadow: 0px 4px 16px ${theme.default.shadowHoverRGBA};
      }
      `}

      ${isWarning &&
      css`
      border-color: ${theme.default.warning.border};
      color: ${theme.default.warning.text};
      &:hover {
        border-color: ${theme.default.warning.borderHover};
        box-shadow: 0px 4px 16px ${theme.default.shadowHoverRGBA};
      }
      `}

      ${isDanger &&
      css`
      border-color: ${theme.default.danger.border};
      color: ${theme.default.danger.text};
      &:hover {
        border-color: ${theme.default.danger.borderHover};
        box-shadow: 0px 4px 16px ${theme.default.shadowHoverRGBA};
      } */
      /* `} */
    `}

  ${({ isPrimary, theme }) =>
    isPrimary &&
    //prettier-ignore
    css`
      background: ${theme.primary.background};
      border-color: ${theme.primary.border};
      color: ${theme.primary.text};
      svg { path { fill: ${theme.primary.text}; } }
      &:hover { box-shadow: 0px 4px 16px ${theme.primary.shadowHoverRGBA}; }
      &:active { transform: scale(0.98); }

      /* ${isSuccess &&
      css`
        background: ${theme.primary.success.background};
        border-color: ${theme.primary.success.border};
        color: ${theme.primary.success.text};
        svg { path { fill: ${theme.primary.success.text}; } }
        &:hover { box-shadow: 0px 4px 16px ${theme.primary.success.shadowHoverRGBA}; }
      `}

      ${isWarning &&
      css`
        background: ${theme.primary.warning.background};
        border-color: ${theme.primary.warning.border};
        color: ${theme.primary.warning.text};
        svg { path { fill: ${theme.primary.warning.text}; } }
        &:hover { box-shadow: 0px 4px 16px ${theme.primary.warning.shadowHoverRGBA}; }
      `}

      ${isDanger &&
      css`
        background: ${theme.primary.danger.background};
        border-color: ${theme.primary.danger.border};
        color: ${theme.primary.danger.text};
        svg { path { fill: ${theme.primary.danger.text}; } }
        &:hover { box-shadow: 0px 4px 16px ${theme.primary.danger.shadowHoverRGBA}; }
      `} */
    `}


    ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
