import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import { createGradientTransition, transitionGradient } from '@/common/helpers/styleHelpers';

import { HomeContentCard } from '../index.styled';

export const CreateRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  ${({ selectedCard }) =>
    selectedCard === homeContentCards.CREATE_ROOM
      ? css`
          pointer-events: none;
          & * {
            pointer-events: all;
            cursor: auto;
          }
        `
      : css`
          pointer-events: all;
          & * {
            pointer-events: none;
          }
        `}

  color: ${({ theme }) => theme.page.home.cards.createRoom.text};

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.page.home.cards.createRoom.background,
      id: '-createRoom',
    })}

  ${({ selectedCard, theme }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 0px 256px rgba(242, 245, 134, 0.75);
          }
        `
      : css`
          ${transitionGradient({
            id: '-createRoom',
            color: theme.page.home.cards.createRoom.selectedBackground,
          })}
        `}
`;
