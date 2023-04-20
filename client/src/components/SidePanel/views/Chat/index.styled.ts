import styled from 'styled-components';

export const SidePanelChatWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
`;

export const ChatMessages = styled.div`
  width: 100%;
  height: calc(var(--vh100) - 252px);

  .chat-messages-scroll {
    box-sizing: border-box;
    width: 100%;
    height: calc(var(--vh100) - 252px);
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const NoMessages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.chat.messageText};
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  opacity: 0.5;
`;

export const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  gap: 2px;
`;

export const Message = styled.div<{}>`
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
  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
  color: ${({ theme }) => theme.chat.messageText};
  background: ${({ theme }) => theme.chat.messageBackground};
`;

export const MessageUser = styled.div<{}>`
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.chat.messageText};
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

export const SendButton = styled.div<{
  disabled: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  height: 48px;
  width: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  .send-icon {
    max-height: 24px;
    max-width: 24px;
    svg {
      path {
        transition: fill 0.3s ease-in-out;
        fill: ${({ theme }) => theme.chat.sendButtonIcon};
        transition: background 0.3s ease-in-out, opacity 0.3 ease-in-out;
        opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
      }
    }
  }

  transition: background 0.3s ease-in-out, opacity 0.3 ease-in-out;
  background: ${({ theme }) => theme.chat.sendButtonBackground};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;
