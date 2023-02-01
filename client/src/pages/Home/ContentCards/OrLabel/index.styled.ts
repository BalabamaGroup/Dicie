import styled, { css } from 'styled-components';

import { homeContentCards } from '@/shared/constants';
import { tabletAndBigger, tabletAndSmaller } from '@/shared/utils/device';

export const OrLabel = styled.div<{
  selectedCard: string;
}>`
  user-select: none;
  box-sizing: border-box;
  z-index: 2;

  position: absolute;
  position: absolute;
  right: auto;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main {
    font-weight: 600;
    font-size: 48px;
    line-height: 44px;
    border-radius: 32px;
    width: 192px;
    height: 192px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.page.home.cards.orLabel.text};
    background: ${({ theme }) => theme.page.home.cards.orLabel.background};
    border-radius: 50%;

    svg {
      width: 72px;
      height: 72px;
    }
  }

  top: calc(50% - 64px);
  left: calc(50% - 96px);

  @media ${tabletAndSmaller} {
    .main {
      width: 128px;
      height: 128px;
      font-size: 40px;
    }

    top: calc(50% - 32px);
    left: calc(50% - 64px);
  }

  ${({ selectedCard }) =>
    selectedCard === homeContentCards.CREATE_ROOM
      ? css`
          cursor: pointer;
          @media ${tabletAndBigger} {
            left: calc(100% - 128px - 64px - 32px);
            .main svg {
              transform: rotate(90deg);
            }
          }
          @media ${tabletAndSmaller} {
            top: calc(100% - 256px + 64px + 32px);
            .main svg {
              transform: rotate(180deg);
            }
          }
        `
      : selectedCard === homeContentCards.JOIN_ROOM &&
        css`
          cursor: pointer;
          @media ${tabletAndBigger} {
            left: 32px;
            .main svg {
              transform: rotate(-90deg);
            }
          }
          @media ${tabletAndSmaller} {
            top: calc(0% + 64px + 32px);
            .main svg {
              transform: rotate(0deg);
            }
          }
        `};
`;
