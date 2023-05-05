import styled, { css } from 'styled-components';

import { tabletAndBigger, tabletAndSmaller } from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  position: relative;
  box-sizing: border-box;

  ${({ isDefault, isSelected, theme }) =>
    isDefault && !isSelected
      ? css`
          background: ${theme.homePage.joinRoomCard.default.background};
          border: 2px solid ${theme.homePage.joinRoomCard.default.border};
          color: ${theme.homePage.joinRoomCard.default.text};
          box-shadow: -4px 4px 6px 1px ${theme.homePage.joinRoomCard.shadowRGBA};
          &:hover {
            box-shadow: 0px 0px 256px
              ${theme.homePage.joinRoomCard.default.shadowHoverRGBA};
          }
        `
      : css`
          background: ${theme.homePage.joinRoomCard.background};
          border: 2px solid ${theme.homePage.joinRoomCard.border};
          color: ${theme.homePage.joinRoomCard.text};
          box-shadow: ${isSelected ? '-4px 4px 6px 1px' : '-4px 4px 6px 1px'}
            ${theme.homePage.joinRoomCard.shadowRGBA};
        `};

  .notselected-arrow {
    position: absolute;
    @media ${tabletAndBigger} {
      left: 0;
      margin-left: 48px;
    }
    @media ${tabletAndSmaller} {
      top: 0;
      margin-top: 12px;
      transform: rotate(90deg);
    }
    svg {
      path {
        fill: ${({ theme }) => theme.homePage.joinRoomCard.notSelected.arrow};
      }
    }
  }

  .on-selected {
    color: ${({ theme }) => theme.homePage.joinRoomCard.text};

    padding: 32px 32px 0 32px;
    @media ${tabletAndSmaller} {
      padding: 32px 0 0 0;
    }
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    .search-wrapper {
      max-width: 400px;
    }
  }
`;
