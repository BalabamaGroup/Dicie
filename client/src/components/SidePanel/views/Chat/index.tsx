import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { ChatMessage } from '@/common/types/chat';
import { ComponentColor } from '@/common/types/theme';
import Input from '@/components/Input';
import Scroll from '@/components/Scroll';
import useKeyPressListener from '@/hooks/useKeyPressListener';
import useChatStore from '@/stores/ChatStore';
import useColorStore from '@/stores/ColorStore';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import * as Styled from './index.styled';

interface SidePanelChatProps {
  color: ComponentColor;
  theme: any;
  chatData: ChatMessage[] | null;
  chatActions: {
    send: Function;
  };
}

const SidePanelChat = ({
  // color,
  // theme,
  chatData,
  chatActions,
}: SidePanelChatProps) => {
  const user = useUserStore((s) => s.user);
  useChatStore;

  const [formMessage, setFormMessage] = useState<string>('');
  const onChangeFormMessage = (e: any) => setFormMessage(e.target.value);

  const onSendMessage = () => {
    if (!formMessage) return;
    if (!user?.id || !user?.username) return;
    chatActions.send({
      userId: user.id,
      username: user.username,
      text: formMessage,
    });
    setFormMessage('');
  };

  // useKeyPressListener({
  //   keyCode: 'Enter',
  //   onPress: onSendMessage,
  // });

  const theme = useThemeStore((state) => state.theme);
  const color = useColorStore((state) => state.color.guessBoo);
  const componentTheme = sidePanelTheme[theme][color];

  return (
    <Styled.SidePanelChatWrapper>
      <Styled.ChatMessages>
        {!chatData || !chatData.length ? (
          <Styled.NoMessages theme={componentTheme}>
            Chat is empty <br /> <br /> Go ahead and write <br /> your first
            message!
          </Styled.NoMessages>
        ) : (
          <Scroll color={color} className='chat-messages-scroll'>
            <Styled.MessagesList>
              {chatData.map((message, i) => [
                (!i || chatData[i - 1].userId !== message.userId) && (
                  <Styled.MessageUser key={`${i}-user`} theme={componentTheme}>
                    {message.username}
                  </Styled.MessageUser>
                ),
                <Styled.Message key={`${i}-message`} theme={componentTheme}>
                  {message.text}
                </Styled.Message>,
              ])}
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
          placeholder={'Write a message....'}
        />
        <Styled.SendButton
          color={color}
          theme={componentTheme}
          onClick={onSendMessage}
          disabled={!formMessage}
        >
          <ReactSVG className='send-icon' src='/images/svgs/send.svg' />
        </Styled.SendButton>
      </Styled.ChatForm>
    </Styled.SidePanelChatWrapper>
  );
};

export default SidePanelChat;
