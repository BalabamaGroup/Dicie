import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Loader from '@/components/Loader';
import Player from '@/components/Player';

import * as Styled from './index.styled';

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

    if (result.YES > result.NO && result.YES > result.WTF) return 'Yes';
    else if (result.NO > result.YES && result.NO > result.WTF) return 'No';
    return 'Wtf';
  };
  const finalAnswer = calculateAnswer();

  let lastPlayer = true;
  otherPlayers.forEach((player) => {
    if (!player.state.winRound) lastPlayer = false;
  });

  console.log(responseConterYes);

  const canMakeAnotherTurn =
    lastPlayer ||
    ((finalAnswer === 'Yes' || finalAnswer === 'Wtf') && responseConterYes < 3);

  const onAskAgain = async () => {
    await CharadesAPI.acceptAnswer();
    const event = new CustomEvent('answerAccept');
    window.dispatchEvent(event);
  };

  const onSkipTurn = () => {};

  return (
    <Styled.Conversation
      id='conversation'
      currentQuestion={currentQuestion}
      finalAnswer={finalAnswer}
    >
      <Player
        color='indigo'
        className='conversation-player'
        onClick={() => {}}
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
          ) : (
            finalAnswer
          )}
        </Styled.OthersAnswer>

        <Styled.MyAnswer finalAnswer={finalAnswer}>
          {canMakeAnotherTurn ? (
            [
              <div className='ask-again' onClick={onAskAgain}>
                Ask again
              </div>,
              <div className='skip-turn' onClick={onSkipTurn}>
                Skip turn
              </div>,
            ]
          ) : (
            <div className='continue' onClick={onAskAgain}>
              Continue
            </div>
          )}
        </Styled.MyAnswer>
      </Styled.ConversationContent>
    </Styled.Conversation>
  );
};

export default Conversation;
