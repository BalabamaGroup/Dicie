import styled from 'styled-components';

import { desktopAndBigger, desktopAndSmaller } from '@/common/utils/device';

export const ChooseGame = styled.div<{}>`
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
    theme.page.home.cards.createRoom.chooseGameBackground};

  border-radius: 0 32px 32px 0;
  @media ${desktopAndSmaller} {
    border-radius: 32px;
  }
`;

export const Header = styled.div<{}>`
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
        fill: ${({ theme }) => theme.page.home.cards.createRoom.text};
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

export const GameList = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;
