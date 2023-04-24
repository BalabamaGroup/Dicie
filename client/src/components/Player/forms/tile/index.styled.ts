import styled, { css } from 'styled-components';

export const PlayerTileFormWrapper = styled.div<{
  isClickable: boolean;
  isDisabled: boolean;
}>`
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 0.3s ease-in-out;

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
`;

export const HighlightWrapper = styled.div<{
  canBeHighlighted: boolean;
  isHighlighted: boolean;
  playerPalette: any;
  themeName: 'light' | 'dark';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  ${({ canBeHighlighted }) =>
    canBeHighlighted &&
    css`
      padding: 4px;
      border: 2px solid transparent;
      transition: border 0.1s ease-in-out, filter 0.2s ease-in-out;
    `}

  ${({ canBeHighlighted, isHighlighted, playerPalette, themeName }) =>
    canBeHighlighted &&
    isHighlighted &&
    css`
      border: 2px solid
        ${themeName === 'light' ? playerPalette.dark : playerPalette.light};
      /* filter: drop-shadow(0px 4px 12px ${playerPalette.main}); */
    `}
`;

export const PlayerTileForm = styled.div<{
  playerPalette: any;
}>`
  display: flex;
  transition: background 0.3s ease-in-out;
  background: ${({ playerPalette }) => playerPalette.main};
`;

export const PlayerTileFormLabel = styled.div<{
  playerPalette: any;
  themeName: 'light' | 'dark';
}>`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  max-width: 100%;
  padding: 4px;
  box-sizing: border-box;
  height: min-content;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  background: ${({ playerPalette, themeName }) =>
    themeName === 'light' ? playerPalette.light : playerPalette.dark};

  color: ${({ playerPalette, themeName }) =>
    themeName === 'light' ? playerPalette.dark : playerPalette.light};

  .character {
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PlayerTileFormOutsideLabel = styled.div`
  margin-top: 12px;
  font-size: 16px;
  line-height: 16px;

  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.outsideLabelText};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .username {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
