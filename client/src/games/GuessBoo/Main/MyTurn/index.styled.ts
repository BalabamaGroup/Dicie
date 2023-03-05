import styled, { css } from 'styled-components';

export const MyTurn = styled.div<{}>`
  height: 400px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: calc(100% - 128px);
`;

export const MyTurnContentWrapper = styled.div<{}>`
  height: 400px;
  width: 100%;
`;

export const AskGuessFormWrapper = styled.div<{
  formSubmitted: boolean;
}>`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* prettier-ignore */
  @keyframes ask-guess-form-slideout {
    0% { opacity: 1; }
    40% { opacity: 0; }
    100% { opacity: 0; }
  }
  /* prettier-ignore */
  @keyframes ask-guess-form-slidein {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  animation: ${({ formSubmitted }) =>
    formSubmitted
      ? 'ask-guess-form-slideout 1s ease-in-out forwards'
      : 'ask-guess-form-slidein 0.3s normal forwards'};

  ${({ formSubmitted }) =>
    formSubmitted &&
    css`
      pointer-events: none;
    `}
`;

export const ReceivedAnswerWrapper = styled.div<{
  formSubmitted: boolean;
}>`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* prettier-ignore */
  @keyframes conversation-slidein {
    0% { opacity: 0;  }
    4% { opacity: 0;  margin-top: -160px}
    100% { margin-top: -400px; opacity: 1;  }
  }

  /* prettier-ignore */
  @keyframes conversation-slideout {
    0% { opacity: 1; margin-top: -400px; }
    100% { opacity: 0;  margin-top: -400px; }
  }

  ${({ formSubmitted }) =>
    formSubmitted
      ? 'animation: conversation-slidein 1s ease-in-out forwards'
      : 'animation: conversation-slideout 0.3s normal forwards'};

  ${({ formSubmitted }) =>
    !formSubmitted &&
    css`
      pointer-events: none;
    `}
`;
