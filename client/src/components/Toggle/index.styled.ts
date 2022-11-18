import styled, { css } from 'styled-components';

export const ToggleWrapper = styled.div<{
  value: boolean;
  size: 'large' | 'medium' | 'small';
  forsedTheme: 'dark' | 'light' | undefined;
}>`
  box-sizing: border-box;
  position: relative;

  ${({ size }) =>
    size === 'large'
      ? css`
          height: 32px;
          width: 64px;
          padding: 5px;
          border-radius: 16px;
        `
      : size === 'medium'
      ? css`
          height: 20px;
          width: 40px;
          padding: 3px;
          border-radius: 10px;
        `
      : css`
          height: 14px;
          width: 28px;
          padding: 2px;
          border-radius: 7px;
        `};

  background: ${({ forsedTheme, theme }) =>
    forsedTheme
      ? forsedTheme === 'light'
        ? theme.toggle.forsed.light.wrapperBackground
        : theme.toggle.forsed.dark.wrapperBackground
      : theme.toggle.wrapperBackground};
`;

export const Toggle = styled.div<{
  value: boolean;
  size: 'large' | 'medium' | 'small';
  forsedTheme: 'dark' | 'light' | undefined;
}>`
  border-radius: 50%;
  position: absolute;

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

  transition: all 0.35s cubic-bezier(0.3, 1.8, 0.4, 0.7);

  background: ${({ forsedTheme, theme }) =>
    forsedTheme
      ? forsedTheme === 'light'
        ? theme.toggle.forsed.light.toggleBackground
        : theme.toggle.forsed.dark.toggleBackground
      : theme.toggle.toggleBackground};
`;
