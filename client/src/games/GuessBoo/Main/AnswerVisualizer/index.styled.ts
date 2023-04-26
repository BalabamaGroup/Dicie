import styled, { css } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';
import { tabletAndSmaller } from '@/common/utils/device';

export const NoQuestion = styled.div`
  margin-top: auto;
  height: 32px;
  min-height: 32px;
  width: 100%;
  /* margin-top: 64px; */
  @media ${tabletAndSmaller} {
    margin-top: 0px;
  }
`;

export const AnswerVisualizer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  /* margin-top: 120px; */
  @media ${tabletAndSmaller} {
    margin-top: 0px;
  }
`;

export const Bar = styled.div<{
  myTurn: boolean;
  isFirst: boolean;
  isLast: boolean;
  width: number;
}>`
  width: 100px;
  height: 32px;

  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out,
    background 0.3s ease-in-out;

  width: ${({ width }) => `${width}%`};

  ${({ isFirst }) =>
    isFirst
      ? css`
          border-top-left-radius: 32px;
          border-bottom-left-radius: 32px;
        `
      : css`
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        `}
  ${({ isLast, width }) =>
    isLast
      ? css`
          ${width && `margin-right: 0px;`}
          border-top-right-radius: 32px;
          border-bottom-right-radius: 32px;
        `
      : css`
          ${width && `margin-right: 6px;`}
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        `};

  ${({ width }) => !width && 'border: none !important'}
`;

export const YesBar = styled(Bar)<{ myTurn: boolean }>`
  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.yesWait
      : theme.guessBooGame.main.game.yesGo};

  border: 1px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.guessBooGame.main.game.yesWaitBorder
        : theme.guessBooGame.main.game.yesGoBorder};
`;

export const NoBar = styled(Bar)<{ myTurn: boolean }>`
  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.noWait
      : theme.guessBooGame.main.game.noGo};

  border: 1px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.guessBooGame.main.game.noWaitBorder
        : theme.guessBooGame.main.game.noGoBorder};
`;

export const WtfBar = styled(Bar)<{ myTurn: boolean }>`
  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.wtfWait
      : theme.guessBooGame.main.game.wtfGo};

  border: 1px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.guessBooGame.main.game.wtfWaitBorder
        : theme.guessBooGame.main.game.wtfGoBorder};
`;

export const EmptyBar = styled(Bar)<{ myTurn: boolean }>`
  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.answerVisualizerDefaultWait
      : theme.guessBooGame.main.game.answerVisualizerDefaultGo};
`;
