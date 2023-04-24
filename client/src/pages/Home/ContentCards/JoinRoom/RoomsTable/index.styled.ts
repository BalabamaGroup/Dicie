import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const RoomsTable = styled.div<{
  isNoRooms?: boolean;
}>`
  background-color: #100f16;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 0px;
  box-sizing: border-box;
  background-color: ${({ theme }) =>
    theme.homePage.joinRoomCard.roomsTableBackground};
  border: 2px solid ${({ theme }) => theme.homePage.joinRoomCard.border};
  border-bottom: none;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px;

  @media ${tabletAndSmaller} {
    border-radius: 32px;
  }

  .no-room-image {
    position: absolute;
    pointer-events: none;
    bottom: 0;
    opacity: ${({ isNoRooms }) => (isNoRooms ? 1 : 0)};
    transition: ${({ isNoRooms }) =>
      isNoRooms ? 'opacity 2.7s ease-in-out' : 'opacity 0s ease-in'};
    transition-delay: ${({ isNoRooms }) => (isNoRooms ? '.9s' : '0s')};

    width: 360px;
    height: 360px;
    svg {
      width: 360px;
      height: 360px;
    }

    @media (max-width: 424px) {
      width: calc(100vw - 64px);
      height: calc(100vw - 64px);
      svg {
        max-width: calc(100vw - 64px);
        height: calc(100vw - 64px);
      }
    }
  }

  .scroll {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
  }
`;

export const RoomRow = styled.div<{}>`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  box-sizing: border-box;

  .game-icon {
    width: 48px;
    height: 48px;
    svg {
      width: 48px;
      height: 48px;
    }
  }

  .room-name {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    width: 200px;
    max-width: 200px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .players-num {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 4px;
    &-icon {
      width: 16px;
      height: 16px;
      svg {
        width: 16px;
        height: 16px;
        path {
          fill: ${({ theme }) =>
            theme.homePage.joinRoomCard.roomsTableUserIconFill};
        }
      }
    }
  }
`;
