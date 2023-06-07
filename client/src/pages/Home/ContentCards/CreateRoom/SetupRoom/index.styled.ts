import styled, { css } from 'styled-components';

import { desktopAndSmaller, tabletAndSmaller } from '@/common/utils/device';

export const SetupRoom = styled.div<{
  isMobileSetupCompleted: boolean;
}>`
  width: 100%;
  height: 100%;
  gap: 32px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  background: ${({ theme }) =>
    theme.homePage.createRoomCard.selected.setupRoomBackground};

  padding: 32px 32px;
  @media ${tabletAndSmaller} {
    padding: 20px;
  }

  border-radius: ${({ isMobileSetupCompleted }) =>
    !isMobileSetupCompleted ? '32px' : '32px 0 0 32px'};

  .setup-room-form-scroll {
    width: 100%;
    max-width: 400px;
  }
`;

export const SetupRoomHeader = styled.div`
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  font-weight: 700;
  font-size: 32px;
`;

export const SetupRoomForm = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  text-align: left;
  overflow-y: auto;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;

  .main {
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;

    .main-text {
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .main-communications {
    margin-bottom: 8px;
  }

  .settings {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .settings-text {
      font-size: 12px;
      font-weight: 400;
      margin: 4px 0;
    }
  }

  .communications-main {
    cursor: pointer;
    font-weight: 600;
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 20px;
  }

  .communications-settings {
    .communications-settings-radio {
      margin-top: 12px;
      .communications-settings-radio-icon {
        svg {
        }
      }
    }
  }
`;

export const CommunicationsParam = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div<{
  isMobileSetupCompleted: boolean;
}>`
  margin-top: auto;
  width: 100%;
  max-width: 400px;
  flex-shrink: 0;

  .choose-game-button {
    display: none;
  }

  @media ${desktopAndSmaller} {
    ${({ isMobileSetupCompleted }) =>
      !isMobileSetupCompleted &&
      css`
        .choose-game-button {
          display: block;
        }
        .create-room-button {
          display: none;
        }
      `}
  }
`;
