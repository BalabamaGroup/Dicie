import styled from 'styled-components';

export const RoomSetupForm = styled.div`
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
`;
