import styled, { css } from 'styled-components';

import { desktopAndSmaller, tabletAndBigger, tabletAndSmaller } from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const CreateRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;

  ${({ isDefault, isSelected, theme }) =>
    isDefault && !isSelected
      ? css`
          background: ${theme.homePage.createRoomCard.default.background};
          border: 2px solid ${theme.homePage.createRoomCard.default.border};
          color: ${theme.homePage.createRoomCard.default.text};
          box-shadow: -4px 4px 6px 1px
            ${theme.homePage.createRoomCard.shadowRGBA};
          &:hover {
            box-shadow: 0px 0px 256px
              ${theme.homePage.createRoomCard.default.shadowHoverRGBA};
          }
        `
      : css`
          background: ${theme.homePage.createRoomCard.background};
          border: 2px solid ${theme.homePage.createRoomCard.border};
          color: ${theme.homePage.createRoomCard.text};
          box-shadow: ${isSelected ? '-4px 4px 6px 1px' : '-4px 4px 6px 1px'}
            ${theme.homePage.createRoomCard.shadowRGBA};
        `};

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
        fill: ${({ theme }) => theme.homePage.createRoomCard.notSelected.arrow};
      }
    }
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
