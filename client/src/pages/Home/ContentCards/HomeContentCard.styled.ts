import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

const HomeContentCard = styled.div<{
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

export default HomeContentCard;
