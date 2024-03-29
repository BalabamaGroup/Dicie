import { thresholds } from '@/common/utils/device';
import styled, { css } from 'styled-components';

export const MyTurn = styled.div`
  height: 480px;
  height: 100%;

  @media ${`(max-width: ${thresholds.guessBoo.setup.sidePanelHorizontal}px)`} {
    height: 100%;
  }

  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;

export const MyTurnContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const AskGuessFormWrapper = styled.div<{
  formSubmitted: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  ${({ formSubmitted }) =>
    formSubmitted &&
    css`
      pointer-events: none;
    `}
`;

export const ReceivedAnswerWrapper = styled.div<{
  formSubmitted: boolean;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ formSubmitted }) =>
    !formSubmitted &&
    css`
      pointer-events: none;
    `}
`;
