import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const OthersTurn = styled.div<{
  currentQuestion: string | null;
}>`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  width: 100%;
  max-width: 480px;
  height: 232px;

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
  currentQuestion: string | null;
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
    height: 256px;
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
  currentQuestion: string | null;
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
  border-radius: 64px 64px 64px 16px;
  width: 100%;
  max-width: 320px;
  margin-right: auto;

  @media ${tabletAndSmaller} {
    border-radius: 16px 64px 64px 64px;
    height: 96px;
  }

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          background: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn
              .myQuestionBackgroundWriting};
          color: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.myQuestionTextWriting};
        `
      : css`
          background: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.myQuestionBackgroundAsked};
          color: ${({ theme }) =>
            theme.guessBooGame.main.game.othersTurn.myQuestionTextAsked};
        `}
`;

export const AnswerBubble = styled.div<{
  givenAnswer: 'YES' | 'NO' | 'WTF' | null;
  currentQuestion: string | null;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px 32px 16px 32px;
  gap: 6px;
  width: calc(100% - 16px);
  max-width: 240px;
  margin-left: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
  height: 48px;
  padding: 6px;

  transition: background 0.2s ease-in-out,
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

  width: ${({ givenAnswer }) => (givenAnswer ? '120px' : 'calc(100% - 16px)')};
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.othersTurn.othersAnswerText};

  background: ${({ givenAnswer, theme }) =>
    givenAnswer === 'YES'
      ? theme.guessBooGame.main.game.yes
      : givenAnswer === 'NO'
      ? theme.guessBooGame.main.game.no
      : givenAnswer === 'WTF'
      ? theme.guessBooGame.main.game.wtf
      : theme.guessBooGame.main.game.othersTurn.othersAnswerBackground};
`;

const AnswerButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 72px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #eceefe;
`;

export const Yes = styled(AnswerButton)`
  border-radius: 16px;
  background: ${({ theme }) => theme.guessBooGame.main.game.yes};
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.othersTurn.othersAnswerText};
`;

export const No = styled(AnswerButton)`
  border-radius: 16px;
  background: ${({ theme }) => theme.guessBooGame.main.game.no};
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.othersTurn.othersAnswerText};
`;

export const Wtf = styled(AnswerButton)`
  border-radius: 16px;
  background: ${({ theme }) => theme.guessBooGame.main.game.wtf};
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.othersTurn.othersAnswerText};
`;
