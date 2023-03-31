import styled, { css } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';

export const NoQuestion = styled.div`
  margin-top: auto;
  height: 32px;
  min-height: 32px;
  width: 100%;
`;

export const AnswerVisualizer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
`;

export const Bar = styled.div<{
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
`;

export const YesBar = styled(Bar)`
  background: ${({ theme }) => theme.guessBooGame.main.game.yes};
`;

export const NoBar = styled(Bar)`
  background: ${({ theme }) => theme.guessBooGame.main.game.no};
`;

export const WtfBar = styled(Bar)`
  background: ${({ theme }) => theme.guessBooGame.main.game.no};
`;

export const EmptyBar = styled(Bar)<{ color: ComponentColor }>`
  background: ${({ color, theme }) =>
    color === 'indigo'
      ? theme.guessBooGame.main.game.answerVisualizerDefaultWait
      : theme.guessBooGame.main.game.answerVisualizerDefaultGo};
`;
