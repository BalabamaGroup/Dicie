import Message from './Message';
import * as Styled from './index.styled';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Scroll from '@/components/Scroll';
import useChatStore from '@/stores/ChatStore';
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

const Chat = () => {
  const user = useUserStore((s) => s.user);

  const [messages, sendMessage] = useChatStore((s) => [
    s.messages,
    s.sendMessage,
  ]);

  const [formMessage, setFormMessage] = useState<string>('');
  const onChangeFormMessage = (e: any) => setFormMessage(e.target.value);

  const onSendMessage = () => {
    if (!formMessage) return;
    if (!user?.id || !user?.username) return;

    sendMessage({
      userId: user.id,
      username: user.username,
      text: formMessage,
    });
    setFormMessage('');

    const scroll = document.getElementById('chat-messages-scroll');
    if (scroll) scroll.scrollTop = scroll!.scrollHeight;
  };

  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  return (
    <Styled.ChatWrapper>
      <Styled.ChatMessages>
        {!messages || !messages.length ? (
          <Styled.NoMessages theme={componentTheme}>
            Chat is empty <br /> <br /> Go ahead and write <br /> your first
            message!
          </Styled.NoMessages>
        ) : (
          <Scroll
            color={color}
            id='chat-messages-scroll'
            className='chat-messages-scroll'
          >
            <Styled.MessagesList>
              {messages.map((message, i) => (
                <Message
                  key={i}
                  index={i}
                  isNewBlock={!i || messages[i - 1].userId !== message.userId}
                  isMyMessage={message.userId === user?.id}
                  username={message.username}
                  text={message.text}
                  special={message.special}
                />
              ))}
            </Styled.MessagesList>
          </Scroll>
        )}
      </Styled.ChatMessages>

      <Styled.ChatForm>
        <Input
          className='chat-form-input'
          color={color}
          value={formMessage}
          onChange={onChangeFormMessage}
          onEnter={onSendMessage}
          placeholder={'Write a message....'}
        />
        <Button color={color} onClick={onSendMessage} isDisabled={!formMessage}>
          <ReactSVG className='send-icon' src='/images/svgs/send.svg' />
        </Button>
      </Styled.ChatForm>
    </Styled.ChatWrapper>
  );
};

export default Chat;
