import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  position: relative;
  color: ${({ theme }) => theme.page.home.joinRoomCard.text};
  border: 2px solid ${({ theme }) => theme.page.home.joinRoomCard.border};

  box-sizing: border-box;

  background: ${({ isDefault, isSelected, theme }) =>
    isDefault
      ? theme.page.home.joinRoomCard.notSelectedBackground
      : !isSelected
      ? theme.page.home.joinRoomCard.background
      : theme.page.home.joinRoomCard.background};

  ${({ isDefault }) =>
    isDefault &&
    css`
      &:hover {
        box-shadow: 0px 0px 256px rgba(106, 101, 255, 0.75);
      }
    `}

  .notselected-arrow {
    margin-left: 48px;
    position: absolute;
    left: 0;
    svg {
      path {
        fill: #8986f5;
      }
    }
  }

  .on-selected {
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
