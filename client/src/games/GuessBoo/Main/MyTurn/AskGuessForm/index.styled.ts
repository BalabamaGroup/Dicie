import styled, { css } from 'styled-components';

import { thresholds } from '@/common/utils/device';

export const AskGuessForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  .question-form-button {
    width: 100%;
    max-width: 400px;
  }
`;

export const AskGuessHeader = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  color: ${({ theme }) =>
    theme.guessBooGame.main.game.myTurn.askGuessForm.header};
  text-align: center;

  span {
    /* font-size: 28px;
    background-color: #181621;
    padding: 4px 16px;
    border-radius: 100px;
    color: #eceefe; */
  }
`;

export const SwitchInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  .question-form-input {
    width: 100%;
    max-width: 320px;
  }
`;

export const ButtonWrapper = styled.div<{ isQuestion: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .guess-waring {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${({ theme }) =>
      theme.guessBooGame.main.game.myTurn.askGuessForm.guessWarning};
    opacity: 1;
    transition: margin-bottom 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  ${({ isQuestion }) =>
    isQuestion &&
    css`
      .guess-waring {
        opacity: 0;
        margin-bottom: -27px;
      }
    `}
`;
