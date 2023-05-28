import styled from 'styled-components';

import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import {
  mobileAndSmaller,
  size,
  tabletAndSmaller,
} from '@/common/utils/device';

export const Memetaur = styled.div<{
  myTurn: boolean;
}>`
  width: 100%;
  height: var(--vh100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 16px 16px 16px;
  gap: 16px;

  box-sizing: border-box;

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.memetaurGame.backgroundWait,
      id: '-memetaurBg',
    })};

  ${({ myTurn, theme }) =>
    !myTurn &&
    transitionGradient({
      id: '-memetaurBg',
      gradient: theme.memetaurGame.backgroundWait,
    })};

  ${({ myTurn, theme }) =>
    myTurn &&
    transitionGradient({
      id: '-memetaurBg',
      gradient: theme.memetaurGame.backgroundGo,
    })};

  @media ${tabletAndSmaller} {
    padding: 16px 16px 16px 16px;
  }

  @media ${mobileAndSmaller} {
    padding: 8px;
    gap: 8px;
  }

  @media ${`(max-width: ${size.tablet}px)`} {
    flex-direction: column;
  }
`;

export const Game = styled.div<{
  myTurn: boolean;
}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  border-radius: 32px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  @media ${`(max-width: ${size.tablet}px)`} {
    height: calc(var(--vh100) - 96px);
  }
  @media ${`(max-width: ${size.mobile}px)`} {
    height: calc(var(--vh100) - 72px);
  }

  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.memetaurGame.game.backgroundWait
      : theme.memetaurGame.game.backgroundGo};

  border: 2px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.memetaurGame.game.borderWait
        : theme.memetaurGame.game.borderGo};

  box-shadow: -4px 4px 6px 1px
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.memetaurGame.game.shadowWaitRGBA
        : theme.memetaurGame.game.shadowGoRGBA};

  @media ${tabletAndSmaller} {
    box-shadow: 0px 4px 6px 1px
      ${({ myTurn, theme }) =>
        !myTurn
          ? theme.memetaurGame.game.shadowWaitRGBA
          : theme.memetaurGame.game.shadowGoRGBA};
  }
`;
