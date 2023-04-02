import styled from 'styled-components';

export const SidePanelChatWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 2px;
`;

export const Message = styled.div<{
  isSameUser: boolean;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  padding: 12px;
  box-sizing: border-box;
  max-width: 320px;
  border-radius: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #eceefe;
  background: #181621;
`;

export const ChatForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .chat-form-input {
    width: 100%;
  }
`;

export const SendButton = styled.div`
  cursor: pointer;
  background: #181621;
  min-width: 52px;
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  .send-icon {
    max-height: 24px;
    max-width: 24px;
    svg {
      path {
        fill: #fff;
      }
    }
  }
`;
