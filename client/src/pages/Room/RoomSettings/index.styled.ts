import styled from 'styled-components';

export const RoomSettings = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 64px;
  box-sizing: border-box;

  .start-game-button {
    max-width: 400px;
  }
`;

export const RoomSettingsForm = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 16px;
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
    .room-password-form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const CommunicationsParam = styled.div`
  display: flex;
  flex-direction: column;

  .communications-main {
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    gap: 16px;

    .communications-main-text {
    }
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
