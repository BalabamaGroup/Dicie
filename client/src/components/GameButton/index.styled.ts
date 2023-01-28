import styled, { css } from 'styled-components';

export const GameButtonWrapper = styled.div<{
  isSelected: boolean;
}>`
  cursor: pointer;
  box-sizing: border-box;

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

  ${({ isSelected, theme }) =>
    !isSelected
      ? css`
          color: ${theme.gameButton.text};
          background: ${theme.gameButton.background};
        `
      : css`
          color: ${theme.gameButton.textSelected};
          background: ${theme.gameButton.backgroundSelected};
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
