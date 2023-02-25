import styled from 'styled-components';

import { mobileAndSmaller, tabletAndSmaller } from '@/common/utils/device';

export const PlayerPickingStage = styled.div<{}>`
  display: flex;
  flex-direction: row;
  height: 100%;

  .mobile-ready-button-wrapper {
    display: none;
    justify-content: center;
    position: relative;
    width: 100%;
    .mobile-ready-button {
      position: absolute;
      top: -64px;
      width: calc(100%-48px);
      max-width: 240px;
    }
  }

  @media ${tabletAndSmaller} {
    flex-direction: column;
    .mobile-ready-button-wrapper {
      display: flex;
    }
  }
`;

export const CurrentPlayer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 64px;
  background: ${({ theme }) =>
    theme.game.guessBoo.playerPicking.currentUserPanel.background};
  color: ${({ theme }) =>
    theme.game.guessBoo.playerPicking.currentUserPanel.text};

  padding: 32px;
  box-sizing: border-box;
  height: 100%;
  width: 480px;
  min-width: 352px;

  .top-message {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: auto;
    text-align: center;
  }

  .current-user-avatar {
    height: 144px;
    width: 144px;
    background: #23272b;
    border-radius: 32px;
  }

  .bottom-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
  }

  @media ${tabletAndSmaller} {
    flex-direction: row;
    width: 100%;
    height: 240px;
    padding: 20px;
    min-width: 0;
    gap: 32px;

    .top-message {
      font-size: 18px;
      margin-bottom: 0;
      margin-right: auto;
    }
    .bottom-content {
      margin-top: 0;
      margin-left: auto;
      .ready-button {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    .current-user-avatar {
      display: none;
    }
  }

  @media ${mobileAndSmaller} {
    height: auto;
    flex-direction: column;
    padding: 16px;
    flex-grow: 1;
    gap: 12px;

    .top-message {
      margin-right: 0;
    }

    .bottom-content {
      margin: 0;
    }
  }
`;

export const PlayersList = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;
