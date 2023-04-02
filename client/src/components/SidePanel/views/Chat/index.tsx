import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { ChatMessage } from '@/common/types/chat';
import Input from '@/components/Input';
import Scroll from '@/components/Scroll';
import useSocketChat from '@/hooks/useSocketChat';

import * as Styled from './index.styled';

interface SidePanelChatProps {
  chatData: ChatMessage[] | null;
  chatActions: {
    send: Function;
  };
}

const SidePanelChat = ({ chatData, chatActions }: SidePanelChatProps) => {
  const [formMessage, setFormMessage] = useState<string>('');
  const onChangeFormMessage = (e: any) => setFormMessage(e.target.value);

  const onSendMessage = () => {
    chatActions.send({
      userId: sessionStorage.getItem('id'),
      text: formMessage,
    });
  };

  return (
    <Styled.SidePanelChatWrapper>
      {!chatData || !chatData.length ? (
        <div style={{ color: 'red' }}>No messages</div>
      ) : (
        <Styled.ChatMessages>
          <Scroll className='chat-messages-scroll'>
            <Styled.MessagesList>
              {chatData.map((message, i) => (
                <Styled.Message
                  key={i}
                  // isSameUser={chatData[i].userId === message.userId}
                >
                  {message.text}
                </Styled.Message>
              ))}
            </Styled.MessagesList>
          </Scroll>
        </Styled.ChatMessages>
      )}

      <Styled.ChatForm>
        <Input
          className='chat-form-input'
          color='indigo'
          value={formMessage}
          onChange={onChangeFormMessage}
        />
        <Styled.SendButton onClick={onSendMessage}>
          <ReactSVG className='send-icon' src='/images/svgs/send.svg' />
        </Styled.SendButton>
      </Styled.ChatForm>
    </Styled.SidePanelChatWrapper>
  );
};

export default SidePanelChat;
