import styled, { css } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';

export const GameButtonWrapper = styled.div<{}>`
  cursor: pointer;
  box-sizing: border-box;

  width: 76px;
  height: 92px;

  padding: 0 0 5px 0;
  border-radius: 22px 22px 8px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5px;

  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
`;

export const GameButtonHighlight = styled.div<{
  color: ComponentColor;
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 72px;
  height: 72px;
  padding: 2px;
  border-radius: 20px;

  transition: border 0.1s ease-in-out;
  ${({ isSelected, color, theme }) =>
    !isSelected
      ? css`
          border: 2px solid transparent;
          /* color: ${theme.gameButton.text};
          background: ${theme.gameButton.background}; */
        `
      : css`
          border: 2px solid
            ${color === 'indigo'
              ? theme.gameButton.highlightBorderWait
              : theme.gameButton.highlightBorderGo};
          /* color: ${theme.gameButton.textSelected};
          background: ${theme.gameButton.backgroundSelected}; */
        `}
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
