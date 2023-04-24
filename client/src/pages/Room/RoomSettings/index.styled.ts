import styled from 'styled-components';

export const RoomSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 64px 16px 16px 16px;
  box-sizing: border-box;

  .players {
    max-width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(5, 148px);
    grid-template-rows: repeat(2, 148px);
    gap: 16px;
  }

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
