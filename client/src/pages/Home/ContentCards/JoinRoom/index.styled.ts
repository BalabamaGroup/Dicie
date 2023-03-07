import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';

import { HomeContentCard } from '../index.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  color: ${({ theme }) => theme.page.home.joinRoomCard.text};
  border: 2px solid ${({ theme }) => theme.page.home.joinRoomCard.border};

  ${({ selectedCard }) =>
    selectedCard === homeContentCards.JOIN_ROOM
      ? css`
          pointer-events: none;
          & * {
            pointer-events: all;
          }
        `
      : css`
          pointer-events: all;
          & * {
            pointer-events: none;
          }
        `}

  ${({ theme }) =>
    createGradientTransition({
      gradient: theme.page.home.joinRoomCard.background,
      id: '-joinRoom',
    })}



  ${({ selectedCard, cardKey, theme }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 0px 256px rgba(106, 101, 255, 0.75);
          }
        `
      : selectedCard === cardKey
      ? css`
          ${transitionGradient({
            id: '-joinRoom',
            color: theme.page.home.joinRoomCard.selectedBackground,
          })}
        `
      : css`
          /* ${transitionGradient({
            id: '-joinRoom',
            color: theme.page.home.joinRoomCard.background,
          })} */
        `}
`;
