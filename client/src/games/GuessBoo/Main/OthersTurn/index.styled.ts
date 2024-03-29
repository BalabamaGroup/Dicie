import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const OthersTurn = styled.div<{
  currentQuestion: string | null | undefined;
}>`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 100%;
  max-width: 560px;
  height: 100%;

  transition: gap 0.3s ease-in-out;
  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          gap: 48px;
        `
      : css`
          gap: 16px;
        `}
`;

export const Qestion = styled.div<{
  currentQuestion: string | null | undefined;
}>`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: start;
  gap: 16px;
  width: calc(100% - 16px);
  height: 144px;

  .others-turn-player-mobile {
    display: none;
    height: 144px;
  }

  @media ${tabletAndSmaller} {
    flex-direction: column;
    gap: 8px;
    height: 304px;
    .others-turn-player {
      display: none;
    }
    .others-turn-player-mobile {
      display: block;
    }
  }

  transition: margin-top 0.3s ease-in-out;
  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          margin-top: 32px;
        `
      : css`
          margin-top: 0px;
        `}
`;

export const MessageBubble = styled.div<{
  currentQuestion: string | null | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  height: 144px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 48px 48px 48px 12px;
  width: 100%;
  max-width: 280px;
  margin-right: auto;

  @media ${tabletAndSmaller} {
    border-radius: 16px 64px 64px 64px;
    height: 144px;
  }

  .writing-loader {
    display: block;
    * {
      display: inline-block;
    }
  }

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          background: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.othersQuestion.loading
              .background};
          color: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.othersQuestion.loading
              .text};
          border: 1px solid
            ${({ theme }) =>
              theme.guessBooGame.main.game.othersTurn.othersQuestion.loading
                .border};
        `
      : css`
          background: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.othersQuestion.asked
              .background};
          color: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.othersQuestion.asked.text};
          border: 1px solid
            ${({ theme }) =>
              theme.guessBooGame.main.game.othersTurn.othersQuestion.asked
                .border};
        `}
`;

export const AnswerBubble = styled.div<{
  givenAnswer: 'YES' | 'NO' | 'WTF' | null;
  currentQuestion: string | null | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px 24px 12px 24px;
  gap: 8px;
  width: calc(100% - 32px);
  max-width: 240px;
  margin-left: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
  height: 80px;
  width: 240px;
  padding: 16px;

  transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
    width 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  .given-answer {
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }

  ${({ currentQuestion }) =>
    !currentQuestion &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  width: ${({ givenAnswer }) => (givenAnswer ? '240px' : 'calc(100% - 16px)')};
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.othersTurn.myAnswer.text};

  background: ${({ givenAnswer, theme }) =>
    givenAnswer === 'YES'
      ? theme.guessBooGame.main.game.yesWait
      : givenAnswer === 'NO'
      ? theme.guessBooGame.main.game.noWait
      : givenAnswer === 'WTF'
      ? theme.guessBooGame.main.game.wtfWait
      : theme.guessBooGame.main.game.othersTurn.myAnswer.background};

  border: 1px solid
    ${({ givenAnswer, theme }) =>
      givenAnswer === 'YES'
        ? theme.guessBooGame.main.game.yesWaitBorder
        : givenAnswer === 'NO'
        ? theme.guessBooGame.main.game.noWaitBorder
        : givenAnswer === 'WTF'
        ? theme.guessBooGame.main.game.wtfWaitBorder
        : 'transparent'};

  .my-answer-btn {
    width: 64px;
  }
`;
