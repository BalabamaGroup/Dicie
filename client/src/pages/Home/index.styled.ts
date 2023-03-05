import styled from 'styled-components';

import { homeContentCards } from '@/common/constants';
import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import { tabletAndSmaller } from '@/common/utils/device';
import { commonPageStyles } from '@/styles/commonStyles';

export const HomePage = styled.section<{ selectedCard: string }>`
  ${commonPageStyles}

  width: 100vw;
  color: ${({ theme }) => theme.page.text};

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.page.background,
      id: '-homePageBackground',
    })}

  ${({ selectedCard, theme }) =>
    selectedCard === homeContentCards.DEFAULT
      ? transitionGradient({
          id: '-homePageBackground',
          gradient: theme.page.background,
        })
      : selectedCard === homeContentCards.CREATE_ROOM
      ? transitionGradient({
          id: '-homePageBackground',
          gradient: theme.page.home.createRoomCard.background,
        })
      : selectedCard === homeContentCards.JOIN_ROOM &&
        transitionGradient({
          id: '-homePageBackground',
          gradient: theme.page.home.joinRoomCard.background,
        })};
`;

export const HomeContent = styled.div`
  height: calc(100vh - 64px);
  @media ${tabletAndSmaller} {
    height: calc(100vh);
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
