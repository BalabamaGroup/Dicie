import styled from 'styled-components';

import {
  desktopAndBigger,
  desktopAndSmaller,
  mobileAndSmaller,
  tabletAndBigger,
} from '@/common/utils/device';

export const ChooseGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 32px 32px;

  gap: 32px;
  box-sizing: border-box;

  background: ${({ theme }) =>
    theme.page.home.createRoomCard.chooseGameBackground};

  border-radius: 0 32px 32px 0;
  @media ${desktopAndSmaller} {
    border-radius: 32px;
  }
  @media ${desktopAndBigger} {
    border-left: 2px solid
      ${({ theme }) => theme.page.home.createRoomCard.border};
  }
`;

export const Header = styled.div`
  flex-shrink: 0;
  width: 100%;
  font-weight: 700;
  font-size: 32px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 5px;
  justify-items: center;

  .arrow-btn {
    flex: 0 1 auto;
    margin-right: auto;
    svg {
      cursor: pointer;
      width: 24px;
      height: 24px;
      path {
        cursor: pointer;
        fill: ${({ theme }) => theme.page.home.createRoomCard.text};
      }
    }
  }

  @media ${desktopAndBigger} {
    .arrow-btn {
      svg {
        display: none;
      }
    }
  }
`;

export const GameList = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 72px);
  grid-template-rows: repeat(auto-fill, 92px);
  justify-content: space-between;
  grid-gap: 32px;

  gap: 32px;
  @media ${mobileAndSmaller} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  width: 100%;
  max-width: 400px;
  flex-shrink: 0;
  @media ${desktopAndBigger} {
    .choose-game_create-room-button {
      display: none;
    }
  }
`;
