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
  border-style: solid;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ singleChild }) =>
    singleChild ? 'center' : 'space-between'};

  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  ${({ size }) =>
    size === 'large'
      ? css`
          border-width: 1px;
          height: 72px;
          padding: 22px;
          border-radius: 16px;
          font-weight: 800;
          font-size: 20px;
          line-height: 20px;
          border-radius: 16px;
          .icon {
            width: 24px;
            height: 24px;
          }
          svg {
            width: 24px;
            height: 24px;
          }
        `
      : size === 'medium'
      ? css`
          border-width: 1px;
          height: 48px;
          padding: 16px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          border-radius: 12px;
          .icon {
            width: 20px;
            height: 20px;
          }
          svg {
            width: 20px;
            height: 20px;
          }
        `
      : css`
          border-width: 1px;
          height: 32px;
          padding: 8px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 12px;
          line-height: 12px;
          border-radius: 8px;
          .icon {
            width: 16px;
            height: 16px;
          }
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
    `}


    ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};
`;
