import styled, { css } from 'styled-components';

import { tabletAndBigger, tabletAndSmaller } from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  position: relative;
  color: ${({ theme }) => theme.homePage.joinRoomCard.text};
  border: 2px solid ${({ theme }) => theme.homePage.joinRoomCard.border};

  box-sizing: border-box;

  background: ${({ isDefault, isSelected, theme }) =>
    isDefault
      ? theme.homePage.joinRoomCard.notSelectedBackground
      : !isSelected
      ? theme.homePage.joinRoomCard.background
      : theme.homePage.joinRoomCard.background};

  box-shadow: ${({ isSelected }) =>
    isSelected ? '4px 4px 12px 1px' : '-4px 4px 12px 1px'};
  color: ${({ theme }) => theme.homePage.joinRoomCard.shadowRGBA};

  ${({ isDefault }) =>
    isDefault &&
    css`
      &:hover {
        box-shadow: 0px 0px 256px rgba(106, 101, 255, 0.75);
      }
    `}

  .on-default {
    color: ${({ theme }) => theme.homePage.joinRoomCard.notSelectedText};
  }

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
        fill: #8986f5;
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
