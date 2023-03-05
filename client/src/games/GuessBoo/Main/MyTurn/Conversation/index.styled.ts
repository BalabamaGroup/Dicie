import styled, { css } from 'styled-components';

export const Conversation = styled.div<{
  currentQuestion: string | null;
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  justify-content: start;
  gap: 16px;

  /* prettier-ignore */
  @keyframes bubble-slidein {
    0% { margin-top: -100px; }
    100% { margin-top: 0px; }
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

export const ConversationContent = styled.div<{}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const MyQuestion = styled.div<{}>`
  align-items: center;
  background: #8986f5;
  border-radius: 64px 64px 8px 64px;
  box-sizing: border-box;
  color: #181621;
  color: #fff;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  height: 144px;
  justify-content: center;
  line-height: 24px;
  margin-left: auto;
  padding: 24px;
  width: 280px;
`;

export const OthersAnswer = styled.div<{
  currentQuestion: string | null;
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f5f6ff;
  border-radius: 64px 64px 64px 16px;
  gap: 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 240px;
  justify-content: center;
  height: 72px;
  color: #fff;
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
    background-color: ${({ finalAnswer }) => (!finalAnswer ? '#000' : ' #fff')};
  }

  background: ${({ finalAnswer }) =>
    finalAnswer === 'Yes'
      ? '#6de36b'
      : finalAnswer === 'No'
      ? '#fc3057'
      : finalAnswer === 'Wtf'
      ? '#ffa84b'
      : '#fff'};
`;

export const MyAnswer = styled.div<{
  finalAnswer: 'Yes' | 'No' | 'Wtf' | null;
}>`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #fff;
  border-radius: 64px 64px 16px 64px;
  gap: 6px;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  height: 72px;
  color: #fff;
  box-sizing: border-box;

  /* prettier-ignore */
  @keyframes my-answer-bubble-slidein {
    0% { opacity: 0; margin-top: 100px; }
    100% { opacity: 1; margin-top: 0px; }
  }

  opacity: 0;
  ${({ finalAnswer }) =>
    finalAnswer &&
    `animation: my-answer-bubble-slidein 0.5s ease-out forwards; `}

  .ask-again,
  .skip-turn {
    cursor: pointer;
    padding: 10px 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #eceefe;
  }

  .ask-again {
    border-radius: 16px 6px 6px 16px;
    background-color: #6de36b;
  }
  .skip-turn {
    border-radius: 6px 16px 16px 6px;
    background-color: #fc3057;
  }
`;
