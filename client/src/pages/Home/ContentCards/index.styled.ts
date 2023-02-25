import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import { tabletAndBigger, tabletAndSmaller } from '@/common/utils/device';

export const ContentCardsWrapper = styled.div<{
  selectedCard: string;
}>`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ContentCards = styled.div<{
  selectedCard: string;
}>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-size: 100% 100%;

  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.5, 0.25, 0, 1);

  @media ${tabletAndBigger} {
    width: calc(200% - 256px - 32px);
    height: 100%;
    padding: 64px;
    flex-direction: row;
    gap: 64px;

    ${({ selectedCard }) =>
      selectedCard === homeContentCards.DEFAULT
        ? css`
            width: 100%;
          `
        : selectedCard === homeContentCards.CREATE_ROOM
        ? css`
            transform: translateX(0);
            padding: 32px;
            gap: 32px;
          `
        : css`
            transform: translateX(-50%) translateX(128px) translateX(16px);
            padding: 32px;
            gap: 32px;
          `}
  }

  @media ${tabletAndSmaller} {
    width: 100%;
    height: calc(200% - 128px - 16px);
    padding: 32px;
    flex-direction: column;
    gap: 32px;

    ${({ selectedCard }) =>
      selectedCard === homeContentCards.DEFAULT
        ? css`
            height: 100%;
          `
        : selectedCard === homeContentCards.CREATE_ROOM
        ? css`
            transform: translateY(0);
            padding: 16px;
            gap: 16px;
          `
        : css`
            transform: translateY(-50%) translateY(64px) translateY(8px);
            padding: 16px;
            gap: 16px;
          `}
  }
`;

export const HomeContentCard = styled.div<{
  cardKey: string;
  selectedCard: string;
}>`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  text-align: center;

  .main,
  .sub {
    max-width: 380px;
  }
  .main {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    white-space: pre-line;
    margin-bottom: 16px;
  }
  .sub {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  ${({ cardKey, selectedCard }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          width: 100%;
          border-radius: 32px;
          padding: 10px;
        `
      : selectedCard === cardKey
      ? css`
          width: 100%;
          border-radius: 32px;
          @media ${tabletAndSmaller} {
            height: 100%;
          }
        `
      : css`
          width: 100%;
          border-radius: 32px;
          @media ${tabletAndSmaller} {
            height: 100%;
          }
        `}
`;
