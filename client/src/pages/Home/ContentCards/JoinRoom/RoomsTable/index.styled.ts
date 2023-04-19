import styled from 'styled-components';

export const RoomsTable = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const RoomRow = styled.div<{}>`
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
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
      }
    }
  }
`;
