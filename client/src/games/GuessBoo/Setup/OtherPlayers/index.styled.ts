import styled, { css } from 'styled-components';

import { mobileAndSmaller, tabletAndSmaller } from '@/common/utils/device';

export const OtherPlayersWrapper = styled.div<{
  isWait: boolean;
}>`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 16px 16px;
  box-sizing: border-box;
  transition: background 0.3s ease-in-out;

  background: ${({ isWait, theme }) =>
    isWait
      ? theme.guessBooGame.setup.otherPlayers.backgroundWait
      : theme.guessBooGame.setup.otherPlayers.backgroundGo};

  .other-players-scroll {
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${tabletAndSmaller} {
    height: 50%;
  }

  @media ${mobileAndSmaller} {
    padding: 16px;
  }
`;

export const OtherPlayers = styled.div<{
  isRow: boolean;
}>`
  height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  box-sizing: border-box;

  ${({ isRow }) =>
    !isRow
      ? css`
          flex-direction: row;
          row-gap: 32px;
          column-gap: 32px;
          .game-setup-other-player {
            width: 100px;
            flex-basis: calc((100% - 64px) / 3);
          }
        `
      : css`
          row-gap: 4px;
          flex-direction: column;
          max-width: 400px;
        `}
`;
