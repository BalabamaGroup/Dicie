import styled, { css } from 'styled-components';

import {
  desktopAndSmaller,
  tabletAndBigger,
  tabletAndSmaller,
} from '@/common/utils/device';

const defaultGapValue = '64px';
const defaultPaddingValue = '64px';

const gapValue = '16px';
const paddingValue = '16px';

const otherCardValue = '128px';

export const ContentCardsWrapper = styled.div<{}>`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ContentCards = styled.div<{
  selectedCard: string | undefined;
}>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-size: 100% 100%;

  // !TODO Figure out how to optimize animations
  /* transition: transform 0.6s cubic-bezier(0.51, 0.92, 0.1, 1.05); */
  transition: transform 0.6s cubic-bezier(0.51, 0.92, 0.1, 1.05),
    padding 0.6s cubic-bezier(0.51, 0.92, 0.1, 1),
    gap 0.6s cubic-bezier(0.51, 0.92, 0.1, 1);

  @media ${tabletAndBigger} {
    width: ${`calc(200% - ${otherCardValue} - ${otherCardValue})`};
    height: 100%;
    padding: 16px;
    flex-direction: row;
    gap: 32px;

    ${({ selectedCard }) =>
      selectedCard === 'createRoom'
        ? css`
            padding: ${paddingValue};
            gap: ${gapValue};
            transform: translateX(0);
          `
        : selectedCard === 'joinRoom'
        ? css`
            padding: ${paddingValue};
            gap: ${gapValue};
            transform: translateX(calc(-50% + 128px));
          `
        : css`
            padding: ${'72px'} ${`calc((100% / 2) - ${'96px'})`};
            transform: translateX(calc(-25% + 64px));
          `}
  }

  @media ${tabletAndSmaller} {
    width: 100%;
    height: calc(200% - 128px - 16px);
    padding: 32px;
    flex-direction: column;
    gap: 32px;

    ${({ selectedCard }) =>
      selectedCard === 'createRoom'
        ? css`
            transform: translateY(0);
            padding: 16px;
            gap: 16px;
          `
        : selectedCard === 'joinRoom'
        ? css`
            transform: translateY(-50%) translateY(64px) translateY(8px);
            padding: 16px;
            gap: 16px;
          `
        : css`
            height: 100%;
          `}
  }
`;
