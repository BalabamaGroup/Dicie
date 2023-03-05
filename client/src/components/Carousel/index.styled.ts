import styled, { css } from 'styled-components';

export const Carousel = styled.div<{ maxWidth: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;

  ${({ maxWidth }) => css`
    width: ${`${maxWidth}px`};
  `}
`;

export const Arrow = styled.div<{
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
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  overflow: hidden;
  box-sizing: border-box;

  ${({ width, gap }) => css`
    width: ${`${width}px`};
    gap: ${`${gap}px`};
  `}

  ${({ shift, itemWidth, gap }) => css`
    & > *:first-child {
      margin-left: ${`-${shift * (itemWidth + gap)}px`};
    }
  `}
`;
