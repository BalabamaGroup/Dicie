import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.div<{
  value: boolean;
  size: 'medium' | 'small';
  active: boolean;
}>`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  ${({ size }) =>
    size === 'medium'
      ? css`
          height: 20px;
          width: 40px;
          min-width: 40px;
          padding: 2.5px;
          border-radius: 10px;
          border-width: 0.5px;
        `
      : css`
          height: 16px;
          width: 32px;
          min-width: 32px;
          padding: 1.95px 2.5px 2.25px 2.5px;
          border-radius: 8px;
          border-width: 0.4px;
        `};

  transition: background 0.175s ease-in-out, border 0.175s ease-in-out,
    transform 0.1s ease-in-out;

  ${({ value, theme }) =>
    !value &&
    css`
      &:hover {
        .toggle {
          background: ${theme.off.toggleHover};
        }
      }
    `};

  ${({ value, active, size }) =>
    active &&
    css`
      transform: scale(0.9);
      .toggle {
        transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
        width: ${size === 'medium' ? '20px' : '16px'};
        ${value &&
        css`
          margin-left: ${value && (size === 'medium' ? '-12px' : '-10px')};
        `}
      }
    `};

  background: ${({ value, theme }) =>
    !value ? theme.off.background : theme.on.background};

  border-style: solid;
  border-color: ${({ value, theme }) =>
    !value ? theme.off.border : theme.on.border};
`;

export const Toggle = styled.div<{
  value: boolean;
  size: 'medium' | 'small';
}>`
  cursor: pointer;
  position: absolute;

  transition: transform 0.35s cubic-bezier(0.3, 1.8, 0.4, 0.7),
    background 0.175s ease-in-out, width 0.1s ease-in-out,
    margin-left 0.1s ease-in-out;

  background: ${({ value, theme }) =>
    !value ? theme.off.toggle : theme.on.toggle};

  ${({ size, value }) =>
    size === 'medium'
      ? css`
          height: 14px;
          width: 14px;
          border-radius: 7px;
          ${!value
            ? 'left: 3px'
            : 'transform: translateX(100%) translateX(3px)'}
        `
      : css`
          height: 11px;
          width: 11px;
          border-radius: 5.5px;
          ${!value
            ? 'left: 2.5px'
            : 'transform: translateX(100%) translateX(2.5px)'}
        `};
`;
