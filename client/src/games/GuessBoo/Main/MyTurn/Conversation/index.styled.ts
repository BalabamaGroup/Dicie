import styled, { css } from 'styled-components';

export const Conversation = styled.div<{
  currentQuestion: string | null;
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  width: 100%;
  max-width: 480px;
  height: 312px;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  justify-content: start;
  gap: 16px;
  box-sizing: border-box;

  /* prettier-ignore */
  @keyframes bubble-slidein {
    0%   { .conversation-player, .conversation-content {margin-top: -100px;}}
    100% { .conversation-player, .conversation-content {margin-top: 0px;   }}
  }

  .conversation-player,
  .conversation-content {
    ${({ currentQuestion }) =>
      currentQuestion && ` animation: bubble-slidein 1s ease-out forwards; `}
  }

  .conversation-player,
  .conversation-content {
    ${({ finalAnswer }) =>
      finalAnswer && ` animation: bubble-slidein 0.5s ease-out forwards; `}
  }
`;

export const ConversationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
`;

export const MyQuestion = styled.div`
  align-items: center;
  background: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.convoMyQuestionBackground};
  border-radius: 64px 64px 8px 64px;
  box-sizing: border-box;
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.convoMyQuestionText};
  display: flex;
  font-size: 20px;
  font-weight: 700;
  height: 144px;
  justify-content: center;
  line-height: 24px;
  margin-left: auto;
  padding: 24px;
  width: 280px;
  max-width: calc(100% - 16px);
`;

export const OthersAnswer = styled.div<{
  currentQuestion: string | null;
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.convoOthersAnswerBackground};
  border-radius: 64px 64px 64px 16px;
  gap: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 240px;
  max-width: calc(100% - 32px);
  justify-content: center;
  height: 72px;
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.convoOthersAnswerText};
  box-sizing: border-box;

  /* prettier-ignore */
  @keyframes others-answer-bubble-slidein {
    0% { opacity: 0; margin-top: 100px; }
    100% { opacity: 1; margin-top: 0px; }
  }

  ${({ currentQuestion }) =>
    currentQuestion &&
    ` animation: others-answer-bubble-slidein 1s ease-out forwards; `}

  .bouncing-loader .dot {
    background-color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoOthersAnswerText};
  }

  background: ${({ finalAnswer, theme }) =>
    finalAnswer === 'Yes'
      ? theme.guessBooGame.main.game.yes
      : finalAnswer === 'No'
      ? theme.guessBooGame.main.game.no
      : finalAnswer === 'Wtf'
      ? theme.guessBooGame.main.game.wtf
      : theme.guessBooGame.main.game.myTurn.convoOthersAnswerBackground};
`;

export const MyAnswer = styled.div<{
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 64px 64px 16px 64px;
  gap: 12px;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  height: 72px;
  color: #fff;
  box-sizing: border-box;

  background-color: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.convoMyAnswerBackground};

  /* prettier-ignore */
  @keyframes my-answer-bubble-slidein {
    0% { opacity: 0; margin-top: 100px; }
    100% { opacity: 1; margin-top: 0px; }
  }

  opacity: 0;
  ${({ finalAnswer }) =>
    finalAnswer &&
    `animation: my-answer-bubble-slidein 0.5s ease-out forwards; `}

  .ask-again, .skip-turn, .continue {
    border-radius: 16px;
    height: 48px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  }

  .ask-again {
    background-color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerAskAgainBg};
    color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerAskAgainText};
  }
  .skip-turn {
    background-color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerSkipTurnBg};
    color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerSkipTurnText};
  }
  .continue {
    background-color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerContinueBg};
    color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.convoMyAnswerContinueText};
  }
`;
