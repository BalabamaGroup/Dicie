import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import {
  createGradientTransition,
  transitionGradient,
} from '@/common/helpers/styleHelpers';
import { desktopAndSmaller } from '@/common/utils/device';

import { HomeContentCard } from '../index.styled';

export const CreateRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  border: 2px solid ${({ theme }) => theme.page.home.createRoomCard.border};

  .header {
    color: ${({ theme }) => theme.page.home.createRoomCard.defaultText};
  }

  ${({ selectedCard }) =>
    selectedCard === homeContentCards.CREATE_ROOM
      ? css`
          pointer-events: none;
          cursor: auto;
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
      id: '-createRoom',
      gradient: theme.page.home.createRoomCard.background,
    })}

  ${({ selectedCard, cardKey, theme }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 0px 256px rgba(242, 245, 134, 0.75);
          }
        `
      : selectedCard === cardKey &&
        css`
          ${transitionGradient({
            id: '-createRoom',
            color: theme.page.home.createRoomCard.selectedBackground,
          })}
        `}
`;

export const CreateRoom = styled.div<{
  isMobileSetupCompleted: boolean;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${desktopAndSmaller} {
    ${({ isMobileSetupCompleted }) =>
      !isMobileSetupCompleted
        ? css`
            .choose-game {
              display: none;
            }
          `
        : css`
            .setup-room {
              display: none;
            }
          `}
  }

  .choose-game {
    width: 100%;
    height: 100%;
  }
`;
