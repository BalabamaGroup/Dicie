import styled, { css } from 'styled-components';

export const SidePanelWrapper = styled.div<{
  collapseOn: number | null;
  bottomOn: number | null;
}>`
  max-width: 400px;
  min-width: 400px;
  height: 100%;
  box-sizing: border-box;

  .collapsed {
    display: none;
  }

  ${({ collapseOn }) =>
    collapseOn &&
    css`
      @media ${`(max-width: ${collapseOn}px)`} {
        max-width: 48px;
        min-width: 48px;
        .collapsed {
          display: flex;
        }
        .opened {
          display: none;
        }
      }
    `}

  ${({ bottomOn }) =>
    bottomOn &&
    css`
      @media ${`(max-width: ${bottomOn}px)`} {
        min-height: 48px;
        max-height: 48px;
        width: 100%
        min-width: 100%;
        max-width: 100%;
        .collapsed {
          display: flex;
        }
        .opened {
          display: none;
        }
      }
    `}
`;

export const SidePanelOpened = styled.div`
  height: 100%;
  width: 100%;
  background: #eceefe;
  border-radius: 32px;
`;

export const SidePanelHeader = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px 32px 8px 8px;
`;

export const SidePanelCollapsed = styled.div`
  height: 100%;
  width: 100%;
  background: #eceefe;
  border-radius: 32px;
`;
