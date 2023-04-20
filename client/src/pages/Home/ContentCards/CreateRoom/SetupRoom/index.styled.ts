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
  /* height: calc(100vh - 128px);
  @media ${tabletAndSmaller} {
    height: calc(100vh - 96px);
  } */

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

export const MakePrivateParam = styled.div`
  display: flex;
  flex-direction: column;

  .isprivate-main {
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;

    .isprivate-main-text {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .isprivate-settings {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .isprivate-settings-text {
      font-size: 12px;
      font-weight: 400;
      margin: 4px 0;
    }
  }
`;

export const CommunicationsParam = styled.div`
  display: flex;
  flex-direction: column;

  .communications-main {
    font-weight: 600;
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
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
