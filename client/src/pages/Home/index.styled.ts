import styled from 'styled-components';

import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import { tabletAndSmaller } from '@/common/utils/device';
import { commonPageStyles } from '@/styles/commonStyles';

export const HomePage = styled.section<{
  selectedCard: string | undefined;
}>`
  ${commonPageStyles}

  width: 100vw;
  height: var(--vh100);
  color: ${({ theme }) => theme.page.text};

  transition: background 0.4s ease-in-out;

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.page.home.defaultBackground,
      id: '-homePageBg',
    })};

  ${({ selectedCard, theme }) =>
    selectedCard === ':card' &&
    transitionGradient({
      id: '-homePageBg',
      gradient: theme.page.home.defaultBackground,
    })};

  ${({ selectedCard, theme }) =>
    selectedCard === 'createRoom' &&
    transitionGradient({
      id: '-homePageBg',
      gradient: theme.page.home.createRoomBackground,
    })};

  ${({ selectedCard, theme }) =>
    selectedCard === 'joinRoom' &&
    transitionGradient({
      id: '-homePageBg',
      gradient: theme.page.home.joinRoomBackground,
    })};
`;

export const HomeContent = styled.div`
  height: var(--vh100);
  padding-top: 64px;
  @media ${tabletAndSmaller} {
    padding-top: 0;
  }
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
