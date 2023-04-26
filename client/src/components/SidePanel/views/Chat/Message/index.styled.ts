import styled, { css } from 'styled-components';

export const MessageUser = styled.div<{ isMyMessage: boolean }>`
  font-weight: 800;
  font-size: 11px;
  margin: 10px 8px 3px 8px;
  line-height: 20px;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.chat.message.text};
  margin-left: ${({ isMyMessage }) => (isMyMessage ? 'auto' : 'none')};
`;

export const MessageWrapper = styled.div<{
  isMyMessage: boolean;
}>`
  display: flex;
  flex-direction: ${({ isMyMessage }) =>
    !isMyMessage ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin-left: ${({ isMyMessage }) => (isMyMessage ? 'auto' : 'none')};
`;

export const Message = styled.div<{
  isMyMessage: boolean;
  isNewBlock: boolean;
  isSpecial: boolean;
}>`
  padding: 8px 12px;
  box-sizing: border-box;
  max-width: 340px;
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

  ${({ isSpecial }) =>
    !isSpecial &&
    css`
      font-weight: 500;
      color: ${({ theme }) => theme.chat.message.text};
      background: ${({ theme }) => theme.chat.message.background};
      border: 0.5px solid ${({ theme }) => theme.chat.message.border};
    `}

  ${({ isSpecial }) =>
    isSpecial &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.chat.specialMessage.text};
      background: ${({ theme }) => theme.chat.specialMessage.background};
      border: 0.5px solid ${({ theme }) => theme.chat.specialMessage.border};
    `}

    border-radius: ${({ isMyMessage, isNewBlock }) =>
    isMyMessage
      ? isNewBlock
        ? '12px 12px 4px 12px'
        : '12px 4px 4px 12px'
      : isNewBlock
      ? '12px 12px 12px 4px'
      : '4px 12px 12px 4px'};
`;
