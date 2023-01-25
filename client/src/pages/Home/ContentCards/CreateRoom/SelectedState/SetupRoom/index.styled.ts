import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const SetupRoomWrapper = styled.div<{
  isMobileView: boolean;
}>`
  gap: 32px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: calc(100vh - 128px);
  @media ${tabletAndSmaller} {
    height: calc(100vh - 96px);
  }

  padding: 32px 32px;
  @media ${tabletAndSmaller} {
    padding: 20px 20px;
  }

  border-radius: ${({ isMobileView }) =>
    isMobileView ? '32px' : '32px 0 0 32px'};
`;

export const SetupRoomHeader = styled.div`
  flex-shrink: 0;
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
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
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
      color: #fff;
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
      color: #fff;
      font-weight: 400;
      margin: 4px 0;
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
      margin-top: 12px;
      .communications-settings-radio-icon {
        svg {
        }
      }
    }
  }
`;

export const ButtonWrapper = styled.div<{}>`
  margin-top: auto;
  width: 100%;
  max-width: 400px;
  flex-shrink: 0;
`;
