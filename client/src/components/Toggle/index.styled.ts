import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.div<{
  value: boolean;
  size: 'large' | 'medium' | 'small';
}>`
  cursor: pointer !important;

  box-sizing: border-box;
  position: relative;

  ${({ size }) =>
    size === 'large'
      ? css`
          height: 32px;
          width: 64px;
          min-width: 64px;
          padding: 5px;
          border-radius: 16px;
        `
      : size === 'medium'
      ? css`
          height: 20px;
          width: 40px;
          min-width: 40px;
          padding: 3px;
          border-radius: 10px;
        `
      : css`
          height: 14px;
          width: 28px;
          min-width: 28px;
          padding: 2px;
          border-radius: 7px;
        `};

  transition: background 0.175s ease-in-out;
  background: ${({ value, theme }) =>
    !value ? theme.backgroundOff : theme.backgroundOn};
`;

export const Toggle = styled.div<{
  value: boolean;
  size: 'large' | 'medium' | 'small';
}>`
  cursor: pointer !important;
  border-radius: 50%;
  position: absolute;

  transition: transform 0.35s cubic-bezier(0.3, 1.8, 0.4, 0.7),
    background 0.175s ease-in-out;

  ${({ value }) => (value ? ` transform: translateX(100%); ` : ` left: 0; `)};

  ${({ size, value }) =>
    size === 'large'
      ? css`
          height: 22px;
          width: 22px;
          margin-left: ${value ? '10px' : '5px'};
        `
      : size === 'medium'
      ? css`
          height: 14px;
          width: 14px;
          margin-left: ${value ? '6px' : '3px'};
        `
      : css`
          height: 10px;
          width: 10px;
          margin-left: ${value ? '4px' : '2px'};
        `};

  background: ${({ value, theme }) =>
    !value ? theme.toggleOff : theme.toggleOn};
`;
