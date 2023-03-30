import styled, { css } from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

export const SelectPlayer = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectPlayerInstruction = styled.div<{}>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  transition: height 0.3s ease-out, color 0.3s ease-out;
  color: ${({ theme }) =>
    theme.guessBooGame.setup.actionArea.intructionTextWait};
`;

export const SelectPlayerConfirm = styled.div<{
  isUserHighlighted: boolean;
}>`
  height: 133px;
  max-height: 133px;
  min-height: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  width: 100%;
  margin: 0;
  transition: margin 0.3s ease-out, color 0.3s ease-out;

  .victim-label {
    margin-bottom: 20px;
    @media ${mobileAndSmaller} {
      margin-bottom: 12px;
    }
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: ${({ theme }) =>
      theme.guessBooGame.setup.actionArea.secondaryLabelText};
    transition: opacity 0.3s ease-out;
    span {
      font-weight: 800;
      color: ${({ theme }) =>
        theme.guessBooGame.setup.actionArea.secondaryLabelSpanText};
    }
  }

  .warning {
    margin-top: 10px;
    @media ${mobileAndSmaller} {
      margin-top: 6px;
    }
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    color: ${({ theme }) =>
      theme.guessBooGame.setup.actionArea.selectPlayerWarningText};
    transition: opacity 0.3s ease-out, margin 0.3s ease-out;
  }

  ${({ isUserHighlighted }) =>
    !isUserHighlighted &&
    css`
      .victim-label {
        opacity: 0;
      }
      .warning {
        margin-top: -15px;
        opacity: 0;
      }
    `}
`;
