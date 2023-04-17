import styled, { css } from 'styled-components';

import { desktopAndSmaller } from '@/common/utils/device';

import HomeContentCard from '../HomeContentCard.styled';

export const CreateRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.page.home.createRoomCard.border};
  background: ${({ isDefault, isSelected, theme }) =>
    isDefault
      ? theme.page.home.createRoomCard.notSelectedBackground
      : !isSelected
      ? theme.page.home.createRoomCard.background
      : theme.page.home.createRoomCard.background};

  &:hover {
    box-shadow: ${({ isDefault }) =>
      isDefault && '0px 0px 256px rgba(242, 245, 134, 0.75)'};
  }

  .header {
    color: ${({ theme }) => theme.page.home.createRoomCard.notSelectedText};
  }

  .notselected-arrow {
    position: absolute;
    right: 0;
    margin-right: 48px;
    svg {
      path {
        fill: #f1f586;
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
