import styled, { css } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';

export const Carousel = styled.div<{
  maxWidth: number;
  cantUseArrows: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;

  ${({ maxWidth }) => css`
    width: ${`${maxWidth}px`};
  `}

  ${({ cantUseArrows }) =>
    cantUseArrows &&
    css`
      .arrow-btn {
        opacity: 0;
      }
    `}
`;

export const Arrow = styled.div<{
  color: ComponentColor;
  isDisabled: boolean;
}>`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  .arrow {
    width: 16px;
    height: 16px;

    svg {
      path {
        transition: fill 0.3s ease-in-out;
        fill: ${({ color, theme }) =>
          color === 'indigo'
            ? theme.carousel.arrowWait
            : theme.carousel.arrowGo};
      }
    }
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: auto;
      opacity: 0.25;
    `}
`;

export const CarouselItems = styled.div<{
  width: number;
  itemWidth: number;
  gap: number;
  shift: number;
  cantUseArrows: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  overflow: hidden;
  box-sizing: border-box;

  ${({ cantUseArrows }) =>
    cantUseArrows &&
    css`
      justify-content: center;
    `}

  ${({ width, gap }) => css`
    width: ${`${width}px`};
    gap: ${`${gap}px`};
  `}

  & > *:first-child {
    transition: margin-left 0.3s ease-in-out;
  }
  ${({ shift, itemWidth, gap }) => css`
    & > *:first-child {
      margin-left: ${`-${shift * (itemWidth + gap)}px`};
    }
  `}
`;
