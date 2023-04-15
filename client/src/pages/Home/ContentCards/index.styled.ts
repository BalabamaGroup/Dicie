import styled, { css } from 'styled-components';

import { homeContentCards } from '@/common/constants';
import { tabletAndBigger, tabletAndSmaller } from '@/common/utils/device';

const defaultGapValue = '64px';
const defaultPaddingValue = '64px';

const gapValue = '16px';
const paddingValue = '16px';

const otherCardValue = '128px';

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

  will-change: transform, padding, gap;
  transition: transform 0.6s cubic-bezier(0.51, 0.92, 0.1, 1.05),
    padding 0.6s cubic-bezier(0.51, 0.92, 0.1, 1),
    gap 0.6s cubic-bezier(0.51, 0.92, 0.1, 1);

  @media ${tabletAndBigger} {
    width: ${`calc(200% - ${otherCardValue} - ${otherCardValue})`};
    height: 100%;
    padding: 64px;
    flex-direction: row;
    gap: 64px;

    ${({ selectedCard }) =>
      selectedCard === homeContentCards.DEFAULT
        ? css`
            padding: ${defaultPaddingValue}
              ${`calc((100% / 2) - ${defaultGapValue})`};
            transform: translateX(-25%) ${`translateX(${defaultGapValue})`};
          `
        : selectedCard === homeContentCards.CREATE_ROOM
        ? css`
            padding: ${paddingValue};
            gap: ${gapValue};
            transform: translateX(0);
          `
        : css`
            padding: ${paddingValue};
            gap: ${gapValue};
            transform: translateX(-50%) ${`translateX(${otherCardValue})`};
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
  isSelected: boolean;
  isDefault: boolean;
}>`
  pointer-events: ${({ isSelected }) => (isSelected ? 'none' : 'all')};
  cursor: ${({ isSelected }) => (isSelected ? 'auto' : 'pointer')};
  & * {
    pointer-events: ${({ isSelected }) => (isSelected ? 'all' : 'none')};
  }

  box-sizing: border-box;

  width: 100%;
  height: 100%;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  text-align: center;

  /* transition: background 0.6s cubic-bezier(0.51, 0.92, 0.1, 1); */

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

  & > * {
    will-change: opacity;
    transition: opacity 0.3s ease-in-out;
  }

  .notselected-arrow {
    position: absolute;
    height: 48px;
    width: 48px;
    transition: opacity 0.3s ease-in-out;
    opacity: ${({ isDefault, isSelected }) =>
      !isDefault && !isSelected ? '1' : '0'};
    svg {
      height: 48px;
      width: 48px;
    }
  }

  .on-default {
    opacity: ${({ isDefault, isSelected }) =>
      isDefault && !isSelected ? '1' : '0'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .on-selected {
    opacity: ${({ isDefault, isSelected }) =>
      !isDefault && isSelected ? '1' : '0'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ isDefault, isSelected }) =>
    isDefault
      ? css`
          width: 100%;
          border-radius: 32px;
          padding: 10px;
        `
      : isSelected
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
          & > * {
            opacity: 0;
          }
          @media ${tabletAndSmaller} {
            height: 100%;
          }
        `}
`;
