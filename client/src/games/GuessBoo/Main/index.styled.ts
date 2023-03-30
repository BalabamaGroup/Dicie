import styled, { css } from 'styled-components';

import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import {
  mobileAndSmaller,
  tabletAndSmaller,
  thresholds,
} from '@/common/utils/device';

export const Main = styled.div<{
  isMyTurn: boolean;
}>`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 80px 16px 16px 16px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;

  @media ${tabletAndSmaller} {
    padding: 16px;
  }

  @media ${mobileAndSmaller} {
    padding: 8px;
    gap: 8px;
  }

  @media ${`(max-width: ${thresholds.guessBoo.main.sidePanelHorizontal}px)`} {
    flex-direction: column;
  }

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.guessBooGame.setup.backgroundWait,
      id: '-guessBooSetupBackground',
    })}

  ${({ isMyTurn, theme }) =>
    !isMyTurn
      ? transitionGradient({
          id: '-guessBooSetupBackground',
          gradient: theme.guessBooGame.setup.backgroundWait,
        })
      : transitionGradient({
          id: '-guessBooSetupBackground',
          gradient: theme.guessBooGame.setup.backgroundGo,
        })}
`;

export const Game = styled.div<{
  isMyTurn: boolean;
}>`
  width: 100%;
  height: 100%;

  background: #eceefe;

  box-sizing: border-box;
  border-radius: 32px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .turn-info {
    display: none;
    margin-top: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    .turn-info-username {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }
    .turn-info-player {
      height: 64px;
    }
  }

  @media ${tabletAndSmaller} {
    .turn-info {
      display: flex;
    }
    .players-carousel {
      display: none;
    }
  }

  @media ${`(max-width: ${thresholds.guessBoo.main.sidePanelHorizontal}px)`} {
    justify-content: center;
  }

  transition: background 0.3s ease-in-out;
  background: ${({ isMyTurn, theme }) =>
    !isMyTurn
      ? theme.guessBooGame.main.game.backgroundWait
      : theme.guessBooGame.main.game.backgroundGo};
`;
