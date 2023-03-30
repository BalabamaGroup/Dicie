import styled, { css } from 'styled-components';

export const PlayerRowFormWrapper = styled.div<{
  isClickable: boolean;
  canBeHighlighted: boolean;
  isHighlighted: boolean;
  isDisabled: boolean;
  playerPalette: any;
}>`
  display: flex;
  min-width: 100%;
  padding: 2px;
  border-radius: 14px;
  border: 2px solid transparent;
  width: 100%;
  max-width: 0px;
  box-sizing: border-box;
  transition: border 0.2s ease-in-out, filter 0.2s ease-in-out;

  ${({ isClickable, isDisabled }) =>
    isClickable &&
    !isDisabled &&
    css`
      cursor: pointer;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
    `}

    ${({ canBeHighlighted }) =>
    canBeHighlighted &&
    css`
      padding: 4px;
      border: 2px solid transparent;
    `}

  ${({ canBeHighlighted, isHighlighted, playerPalette, theme }) =>
    canBeHighlighted &&
    isHighlighted &&
    css`
      border: 2px solid ${theme.highlightBorder};
      /* filter: drop-shadow(0px 4px 12px ${playerPalette.main}); */
    `}
`;

export const PlayerRowForm = styled.div<{
  playerPalette: any;
  themeName: 'light' | 'dark';
}>`
  width: 100%;
  max-width: 100%;
  padding: 8px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 12px;
  background: ${({ theme }) => theme.background};
  border-radius: 12px;

  .avatar {
    display: flex;
    min-width: 40px;
    width: 40px;
    height: 40px;
    background: ${({ playerPalette, themeName }) =>
      themeName === 'light' ? playerPalette.main : playerPalette.main};
    border: 1px solid
      ${({ playerPalette, themeName }) =>
        themeName === 'light' ? playerPalette.light : playerPalette.dark};
    border-radius: 6px;
  }

  .main {
    margin-top: 6px;
    width: calc(100% - 184px);
    min-width: 100px;

    .main-top {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${({ playerPalette, themeName }) =>
        themeName === 'light' ? playerPalette.dark : playerPalette.light};
    }
    .main-bottom {
      margin-top: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.secondaryText};
    }
  }

  .label {
    margin-left: auto;
    background: ${({ theme }) => theme.labelBackground};
    border-radius: 8px;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: ${({ playerPalette, themeName }) =>
      themeName === 'light' ? playerPalette.dark : playerPalette.light};
    padding: 17px 6px;
    height: 48px;
    box-sizing: border-box;
    width: 100%;
    min-width: 48px;
    max-width: 96px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
