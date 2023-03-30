import styled from 'styled-components';

import { mobileAndSmaller, tabletAndSmaller } from '@/common/utils/device';

export const ActionArea = styled.div<{
  isMyTurn: boolean;
  isWait: boolean;
}>`
  height: 100%;
  width: 400px;
  min-width: 400px;
  border-radius: 32px;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    min-width: 100%;
  }

  @media ${tabletAndSmaller} {
    width: 100%;
    padding-bottom: 48px;
  }

  @media ${mobileAndSmaller} {
    width: 100%;
    padding-bottom: 16px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    max-width: 400px;
  }

  ${({ isMyTurn }) => !isMyTurn && `opacity: 0.3`};
  background: ${({ isWait, theme }) =>
    isWait
      ? theme.guessBooGame.setup.actionArea.backgroundWait
      : theme.guessBooGame.setup.actionArea.backgroundGo};
  transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
