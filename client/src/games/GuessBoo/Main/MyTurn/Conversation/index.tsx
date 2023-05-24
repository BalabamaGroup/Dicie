import * as Styled from './index.styled';
import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Player from '@/components/Player';
import useChatStore from '@/stores/ChatStore';
import useGameStore from '@/stores/GameStore';
import useUserStore from '@/stores/UserStore';

interface ConversationProps {
  otherPlayers: UserInGame[];
  currentQuestion: string | null;
  responseConterYes: number;
}

const Conversation = ({
  otherPlayers,
  currentQuestion,
  responseConterYes,
}: ConversationProps) => {
  const user = useUserStore((s) => s.user);
  const sendMessage = useChatStore((s) => s.sendMessage);

  const answeredCount = otherPlayers.reduce(
    (result, player) => result + (player.state.lastAnswer ? 1 : 0),
    0
  );

  const calculateAnswer = () => {
    if (otherPlayers.length > answeredCount) return null;

    const result = { YES: 0, NO: 0, WTF: 0 };
    otherPlayers.forEach(
      (p) => p.state.lastAnswer && result[p.state.lastAnswer]++
    );

    if (result.YES > result.NO && result.YES > result.WTF) return 'YES';
    else if (result.NO > result.YES && result.NO > result.WTF) return 'NO';
    return 'WTF';
  };

  const finalAnswer = calculateAnswer();

  let lastPlayer = true;
  otherPlayers.forEach((player) => {
    if (!player.state.winRound) lastPlayer = false;
  });

  const canMakeAnotherTurn =
    lastPlayer ||
    ((finalAnswer === 'YES' || finalAnswer === 'WTF') &&
      responseConterYes < 2) ||
    finalAnswer !== 'NO';

  const onAskAgain = async () => {
    if (!currentQuestion || !finalAnswer) return;

    sendMessage({
      userId: user!.id,
      username: user!.username,
      text: currentQuestion,
      special: {
        game: 'guessBoo',
        guessBoo: {
          answer: finalAnswer,
        },
      },
    });

    const scroll = document.getElementById('chat-messages-scroll');
    if (scroll) scroll.scrollTop = scroll!.scrollHeight;

    CharadesAPI.acceptAnswer();
  };

  const onSkipTurn = () => {
    return;
  };

  return (
    <Styled.Conversation
      id='conversation'
      currentQuestion={currentQuestion}
      finalAnswer={finalAnswer}
    >
      <Player
        id={user!.id}
        color='indigo'
        className='conversation-player'
        onClick={() => {
          return;
        }}
        size='medium'
      />

      <Styled.ConversationContent className='conversation-content'>
        <Styled.MyQuestion>{currentQuestion}</Styled.MyQuestion>

        <Styled.OthersAnswer
          currentQuestion={currentQuestion}
          finalAnswer={finalAnswer}
        >
          {otherPlayers.length > answeredCount ? (
            <Loader.BouncingDots size={24} />
          ) : finalAnswer === 'YES' ? (
            'Yes'
          ) : finalAnswer === 'NO' ? (
            'No'
          ) : (
            'Wtf'
          )}
        </Styled.OthersAnswer>

        <Styled.MyAnswer finalAnswer={finalAnswer}>
          {canMakeAnotherTurn ? (
            [
              <Button
                type='success'
                key={'ask-again'}
                color='lime'
                isPrimary
                onClick={onAskAgain}
              >
                Ask again
              </Button>,
              <Button
                type='danger'
                key={'skip-turn'}
                color='lime'
                isPrimary
                onClick={onAskAgain}
              >
                Skip turn
              </Button>,
            ]
          ) : (
            <Button color='lime' isPrimary onClick={onAskAgain}>
              Continue
            </Button>
          )}
        </Styled.MyAnswer>
      </Styled.ConversationContent>
    </Styled.Conversation>
  );
};

export default Conversation;
