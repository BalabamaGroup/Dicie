import { ReactSVG } from 'react-svg';

import { ChatSpecialMessage } from '@/common/types/chat';
import Scroll from '@/components/Scroll';
import useChatStore from '@/stores/ChatStore';
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import * as Styled from './index.styled';

interface GuessBooAnswersProps {}

const GuessBooAnswers = ({}: GuessBooAnswersProps) => {
  const user = useUserStore((s) => s.user);
  const messages = useChatStore((s) => s.messages);

  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  const myTurn = useGameStore((s) => s.myTurn);

  const myAnswers = messages.filter(
    (m) =>
      m.userId === user?.id &&
      m.special &&
      m.special.guessBoo &&
      m.special.guessBoo.answer
  );

  const getIcon = (answer: 'YES' | 'NO' | 'WTF'): string => {
    if (answer == 'YES') return '/images/svgs/check.svg';
    if (answer == 'NO') return '/images/svgs/cross.svg';
    return '/images/svgs/question-mark.svg';
  };

  return (
    <Styled.GuessBooAnswers theme={componentTheme}>
      <Scroll className='scroll' color={color}>
        <div className='scroll-wrapper'>
          {myAnswers.map((message) => (
            <Styled.GuessBooAnswer
              answer={message.special!.guessBoo!.answer}
              myTurn={myTurn}
              theme={componentTheme}
            >
              <div className='question'>{message.text}</div>
              <Styled.GuessBooAnswerIndicator
                className='indicator'
                answer={message.special!.guessBoo!.answer}
                myTurn={myTurn}
              >
                <ReactSVG
                  className='icon'
                  src={getIcon(message.special!.guessBoo!.answer)}
                />
              </Styled.GuessBooAnswerIndicator>
            </Styled.GuessBooAnswer>
          ))}
        </div>
      </Scroll>
    </Styled.GuessBooAnswers>
  );
};

export default GuessBooAnswers;
