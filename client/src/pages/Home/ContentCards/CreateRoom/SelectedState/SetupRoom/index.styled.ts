import styled from 'styled-components';

export const SetupRoomWrapper = styled.div<{}>`
  padding: 32px 32px;
  gap: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-radius: 32px 0 0 32px;
  background-color: #131214;
`;

export const SetupRoomHeader = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #fff;
`;

export const SetupRoomForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  max-width: 400px;
  text-align: left;
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
      color: #fff;
    }
  }

  .isprivate-settings {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .isprivate-settings-text {
      color: #fff;
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
      color: #fff;
    }
  }

  .communications-settings {
    .communications-settings-radio {
      .communications-settings-radio-icon {
        svg {
          width: 96px !important;
          height: 96px !important;
        }
      }
    }
  }
`;
