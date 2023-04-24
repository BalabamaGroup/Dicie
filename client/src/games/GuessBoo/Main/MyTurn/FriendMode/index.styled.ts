import styled, { css } from 'styled-components';

export const FriendMode = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FriendModeWrapper = styled.div<{}>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .question-form-switch {
    margin-bottom: 48px;
  }

  .submit-button {
    max-width: 380px;
  }
`;

export const InputWrapper = styled.div<{ isVisible: boolean }>`
  height: 72px;
  opacity: 1;
  margin-bottom: 21px;

  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out,
    margin-bottom 0.3s ease-in-out;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      height: 0;
      opacity: 0;
      margin-bottom: 0;
    `}
`;

export const SpacePassTurnInstruction = styled.div<{ isVisible: boolean }>`
  height: 24px;

  margin-bottom: 24px;
  margin-top: 4px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;

  color: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.askGuessFormHeader};

  span {
    color: #a3a90e;
    font-weight: 900;
    color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.askGuessFormHeaderSpan};
  }

  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out,
    margin-bottom 0.3s ease-in-out, margin-top 0.3s ease-in-out;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      height: 0;
      opacity: 0;
      margin-bottom: 0;
      margin-top: 0;
    `}
`;
export const WrongGuessWarning = styled.div<{ isVisible: boolean }>`
  height: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.guessBooGame.main.game.myTurn.guessWarning};
  margin-bottom: 8px;

  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out,
    margin-bottom 0.3s ease-in-out;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      height: 0;
      opacity: 0;
      margin-bottom: 0;
    `}
`;
