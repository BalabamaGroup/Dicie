import styled, { css } from 'styled-components';

export const CollapsedFormWrapper = styled.div<{
  isOpened: boolean;
  isHorizontal: boolean;
}>`
  z-index: 90;
  width: 48px;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  .side-panel-collapsed {
    cursor: pointer;
    height: 240px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.bodyBackground};
    border-radius: 32px;
    transition: background 0.3s ease-in-out,
      width 0.35s cubic-bezier(0.51, 0.92, 0.1, 1.1),
      height 0.35s cubic-bezier(0.51, 0.92, 0.1, 1.1);
    svg {
      width: 24px;
      height: 24px;
      path {
        transition: fill 0.3s ease-in-out;
        fill: ${({ theme }) => theme.collapsedArrowIcon};
      }
    }
  }

  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      height: 48px;
      min-height: 48px;
      max-height: 48px;
      width: 100%;
      min-width: 100%;
      max-width: 100%;

      .side-panel-collapsed {
        height: 100%;
        width: 240px;
      }
    `}

  transition: opacity 0.3s ease-in-out;
  ${({ isOpened }) =>
    isOpened &&
    css`
      opacity: 0;
      .side-panel-collapsed {
        width: 0;
        height: 0;
        svg {
          opacity: 0;
        }
      }
    `}
`;

export const SidePanelBakdrop = styled.div<{
  isOpened: boolean;
}>`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.backdrop};
  backdrop-filter: blur(8px);
  padding: 80px 16px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;

  transition: opacity 0.35s ease-in-out;
  ${({ isOpened }) =>
    !isOpened &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const SidePanelMainWrapper = styled.div<{
  isOpened: boolean;
  isHorizontal: boolean;
}>`
  position: fixed;
  top: 80px;
  bottom: 16px;
  right: 16px;

  width: 480px;
  max-width: calc(100% - 32px);
  height: calc(100% - 96px);

  transition: right 0.5s cubic-bezier(0.51, 0.92, 0.1, 1.1),
    top 0.5s cubic-bezier(0.51, 0.92, 0.1, 1.1);

  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ isOpened, isHorizontal }) =>
    !isOpened &&
    (!isHorizontal
      ? css`
          right: -480px;
        `
      : css`
          top: 100vh;
        `)}
`;
