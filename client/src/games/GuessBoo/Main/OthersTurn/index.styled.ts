import styled, { css } from 'styled-components';

export const OthersTurn = styled.div<{
  currentQuestion: string | null;
}>`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  max-width: 480px;

  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          margin-top: 32px;
          gap: 48px;
        `
      : css`
          margin-top: 0px;
          gap: 16px;
        `}
`;

export const Qestion = styled.div<{}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
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
  color: #181621;
  height: 144px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 64px 64px 64px 16px;
  width: 100%;
  max-width: 320px;

  ${({ currentQuestion }) =>
    !currentQuestion
      ? css`
          background: #f5f6ff;
          color: #000;
        `
      : css`
          background-color: #8986f5;
          color: #fff;
        `}
`;

export const AnswerBubble = styled.div<{
  givenAnswer: 'YES' | 'NO' | 'WTF' | null;
  currentQuestion: string | null;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6ff;
  border-radius: 32px 32px 16px 32px;
  gap: 6px;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  box-sizing: border-box;
  height: 72px;
  padding: 16px;

  transition-property: width, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

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

  ${({ givenAnswer }) =>
    givenAnswer
      ? css`
          width: 120px;
          color: #fff;
        `
      : css`
          width: 270px;
          color: #000;
        `}

    background: ${({ givenAnswer }) =>
    givenAnswer === 'YES'
      ? '#6de36b'
      : givenAnswer === 'NO'
      ? '#fc3057'
      : givenAnswer === 'WTF'
      ? '#ffa84b'
      : '#f5f6ff'};
`;

const AnswerButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #eceefe;
`;

export const Yes = styled(AnswerButton)`
  border-radius: 16px 6px 6px 16px;
  background: #6de36b;
`;

export const No = styled(AnswerButton)`
  border-radius: 6px;
  background: #fc3057;
`;

export const Wtf = styled(AnswerButton)`
  border-radius: 6px 16px 16px 6px;
  background: #ffa84b;
`;
