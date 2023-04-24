import styled, { css } from 'styled-components';

import {
  desktopAndSmaller,
  tabletAndBigger,
  tabletAndSmaller,
} from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const CreateRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 2px solid ${({ theme }) => theme.homePage.createRoomCard.border};

  background: ${({ isDefault, isSelected, theme }) =>
    isDefault
      ? theme.homePage.createRoomCard.notSelectedBackground
      : !isSelected
      ? theme.homePage.createRoomCard.background
      : theme.homePage.createRoomCard.background};

  box-shadow: ${({ isSelected }) =>
    isSelected ? '-4px 4px 12px 1px' : '4px 4px 12px 1px'};
  color: ${({ theme }) => theme.homePage.createRoomCard.shadowRGBA};

  &:hover {
    box-shadow: ${({ isDefault }) =>
      isDefault && '0px 0px 256px rgba(242, 245, 134, 0.75)'};
  }

  .header {
    color: ${({ theme }) => theme.homePage.createRoomCard.notSelectedText};
  }

  .notselected-arrow {
    position: absolute;
    @media ${tabletAndBigger} {
      right: 0;
      margin-right: 48px;
    }
    @media ${tabletAndSmaller} {
      bottom: 0;
      margin-bottom: 12px;
      transform: rotate(90deg);
    }
    svg {
      path {
        fill: #f1f586;
      }
    }
  }

  .on-selected {
    color: ${({ theme }) => theme.homePage.createRoomCard.text};
  }
`;

export const CreateRoom = styled.div<{
  isMobileSetupCompleted: boolean;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${desktopAndSmaller} {
    ${({ isMobileSetupCompleted }) =>
      !isMobileSetupCompleted
        ? css`
            .choose-game {
              display: none;
            }
          `
        : css`
            .setup-room {
              display: none;
            }
          `}
  }

  .choose-game {
    width: 100%;
    height: 100%;
  }
`;
