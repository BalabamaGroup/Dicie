import styled, { css } from 'styled-components';

export const GuessBooAnswers = styled.div<{}>`
  width: 100%;
  height: 100%;
  padding: 0 0 16px 0;
  box-sizing: border-box;
  padding-top: 16px;

  .scroll {
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;
    width: 100%;
    height: calc(var(--vh100) - 204px);
    display: flex;
    flex-direction: column-reverse;
  }

  .scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 8px;
  }
`;

export const GuessBooAnswer = styled.div<{
  answer: 'YES' | 'NO' | 'WTF';
  myTurn: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.guessBooAnswers.bottomBorder};

  .question {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: ${({ theme }) => theme.guessBooAnswers.text};
  }

  .indicator {
    .icon {
      svg {
        path {
          fill: ${({ theme }) => theme.guessBooAnswers.iconFill};
        }
      }
    }
  }
`;

export const GuessBooAnswerIndicator = styled.div<{
  answer: 'YES' | 'NO' | 'WTF';
  myTurn: boolean;
}>`
  border-radius: 6px;
  padding: 2px 12px;

  .icon {
    width: 14px;
    height: 14px;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  ${({ answer, myTurn, theme }) =>
    answer === 'YES' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.yesWait
        : theme.guessBooGame.main.game.yesGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.yesWaitBorder
          : theme.guessBooGame.main.game.yesGoBorder};
    `};

  ${({ answer, myTurn, theme }) =>
    answer === 'NO' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.noWait
        : theme.guessBooGame.main.game.noGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.noWaitBorder
          : theme.guessBooGame.main.game.noGoBorder};
    `};

  ${({ answer, myTurn, theme }) =>
    answer === 'WTF' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.wtfWait
        : theme.guessBooGame.main.game.wtfGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.wtfWaitBorder
          : theme.guessBooGame.main.game.wtfGoBorder};
    `};
`;
