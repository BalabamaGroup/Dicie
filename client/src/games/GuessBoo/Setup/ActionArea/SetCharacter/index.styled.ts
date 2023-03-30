import styled, { css } from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

export const SetCharacter = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .instruction {
    white-space: pre-line;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: center;
    color: ${({ theme }) =>
      theme.guessBooGame.setup.actionArea.intructionTextGo};

    @media ${mobileAndSmaller} {
      display: none;
    }
  }

  .input {
    width: 100%;
  }

  .example {
    user-select: none;
    margin-top: 10px;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: ${({ theme }) =>
      theme.guessBooGame.setup.actionArea.secondaryLabelText};
    span {
      cursor: pointer;
      font-weight: 800;
      color: ${({ theme }) =>
        theme.guessBooGame.setup.actionArea.secondaryLabelSpanText};
    }
  }
`;
