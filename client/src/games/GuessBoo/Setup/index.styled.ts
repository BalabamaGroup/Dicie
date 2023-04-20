import styled, { css } from 'styled-components';

import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import {
  desktopAndSmaller,
  mobileAndSmaller,
  tabletAndSmaller,
  thresholds,
} from '@/common/utils/device';

export const Setup = styled.div<{
  isWait: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100vw;
  height: var(--vh100);
  padding: 80px 16px 16px 16px;
  box-sizing: border-box;

  @media ${tabletAndSmaller} {
    padding: 16px;
  }

  @media ${mobileAndSmaller} {
    gap: 8px;
    padding: 8px;
  }

  @media ${`(max-width: ${thresholds.guessBoo.setup.sidePanelHorizontal}px)`} {
    flex-direction: column;
  }

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.guessBooGame.setup.backgroundWait,
      id: '-guessBooSetupBackground',
    })}

  ${({ isWait, theme }) =>
    isWait
      ? transitionGradient({
          id: '-guessBooSetupBackground',
          gradient: theme.guessBooGame.setup.backgroundWait,
        })
      : transitionGradient({
          id: '-guessBooSetupBackground',
          gradient: theme.guessBooGame.setup.backgroundGo,
        })}
`;

export const SetupContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 100%;
  gap: 16px;

  @media ${`(max-width: ${thresholds.guessBoo.setup.sidePanelHorizontal}px)`} {
    max-height: calc(var(--vh100) - 160px);
    min-height: calc(var(--vh100) - 160px);
  }

  @media ${tabletAndSmaller} {
    flex-direction: column-reverse;
    max-height: calc(var(--vh100) - 96px);
    min-height: calc(var(--vh100) - 96px);
  }

  @media ${mobileAndSmaller} {
    flex-direction: column-reverse;
    max-height: calc(var(--vh100) - 72px);
    min-height: calc(var(--vh100) - 72px);
  }
`;
