import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import GuessBooAnswerIndicator from './GuessBooAnswerIndicator';
import * as Styled from './index.styled';

interface MessageProps {
  index: number;

  username: string;
  text: string;
  special?: {
    game: 'guessBoo';
    guessBoo?: {
      answer: 'YES' | 'NO' | 'WTF';
    };
  };

  isNewBlock: boolean;
  isMyMessage: boolean;
}

const Message = ({
  index,

  username,
  text,
  special,

  isNewBlock,
  isMyMessage,
}: MessageProps) => {
  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  return (
    <>
      {isNewBlock && (
        <Styled.MessageUser
          isMyMessage={isMyMessage}
          key={`${index}-user`}
          theme={componentTheme}
        >
          {username}
        </Styled.MessageUser>
      )}
      <Styled.MessageWrapper
        key={`${index}-message`}
        isMyMessage={isMyMessage}
        theme={componentTheme}
      >
        <Styled.Message
          isMyMessage={isMyMessage}
          isNewBlock={isNewBlock}
          isSpecial={!!special}
          theme={componentTheme}
        >
          {text}
        </Styled.Message>
        {!!special?.guessBoo?.answer && (
          <GuessBooAnswerIndicator answer={special.guessBoo.answer} />
        )}
      </Styled.MessageWrapper>
    </>
  );
};

export default Message;
