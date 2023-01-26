import styled from 'styled-components';

export const GameButtonWrapper = styled.div<{}>`
  cursor: pointer;
  background-color: #000;
  box-sizing: border-box;

  padding: 0 0 4px 0;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 4px;

  font-size: 10px;
  line-height: 10px;
`;

export const GameButton = styled.div<{}>`
  font-size: 12px;
  font-weight: 600;

  .game-button-icon {
    width: 72px;
    height: 72px;
    svg {
      width: 72px;
      height: 72px;
      * {
        cursor: pointer;
      }
    }
  }
`;
