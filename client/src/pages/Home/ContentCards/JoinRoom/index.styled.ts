import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import { createGradientTransition, transitionGradient } from '@/common/helpers/styleHelpers';

import { HomeContentCard } from '../index.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  color: ${({ theme }) => theme.page.home.cards.joinRoom.text};

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.page.home.cards.joinRoom.background,
      id: '-joinRoom',
    })}

  ${({ selectedCard, theme }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 0px 256px rgba(106, 101, 255, 0.75);
          }
        `
      : css`
          ${transitionGradient({
            id: '-joinRoom',
            color: theme.page.home.cards.joinRoom.selectedBackground,
          })}
        `}
`;