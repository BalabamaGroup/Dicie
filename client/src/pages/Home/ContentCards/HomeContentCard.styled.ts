import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

const HomeContentCard = styled.div<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  cursor: ${({ isSelected }) => (isSelected ? 'auto' : 'pointer')};
  pointer-events: ${({ isSelected }) => (isSelected ? 'none' : 'all')};
  & > * {
    pointer-events: ${({ isSelected }) => (isSelected ? 'all' : 'none')};
  }
  user-select: none;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .notselected-arrow {
    position: absolute;
    height: 48px;
    width: 48px;
    /* transition: opacity 0.3s ease-in-out; */
    display: ${({ isDefault, isSelected }) =>
      !isDefault && !isSelected ? 'block' : 'none'};
    svg {
      height: 48px;
      width: 48px;
    }
  }

  .on-default {
    height: 100%;
    width: 100%;
    text-align: center;
    /* transition: opacity 0.2s ease-in-out; */
    display: ${({ isDefault, isSelected }) =>
      isDefault && !isSelected ? 'flex' : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    user-select: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  }

  .on-selected {
    height: 100%;
    width: 100%;

    will-change: opacity;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    opacity: ${({ isDefault, isSelected }) =>
      !isDefault && isSelected ? '1' : '0'};

    transform: translateX(-50%) translateY(calc(-50% - 0.5px));
    /* transform: translate(-50%, -50%)
      ${({ isDefault, isSelected }) =>
      !isDefault && isSelected ? 'scale(1)' : 'scaleX(0.5)'}; */

    position: absolute;
    top: 50%;
    left: 50%;
  }

  // !TODO Figure out how to optimize animations
  transition: background 0.25s ease-in-out, border 0.3s ease-in-out,
    box-shadow 0.15s ease-in-out;

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
          @media ${tabletAndSmaller} {
            height: 100%;
          }
        `}
`;

export default HomeContentCard;
