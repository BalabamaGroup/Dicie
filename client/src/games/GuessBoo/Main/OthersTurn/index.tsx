import * as Styled from './index.styled';
import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Player from '@/components/Player';
import useGameStore from '@/stores/GameStore';

interface OthersTurnProps {}

const OthersTurn = ({}: OthersTurnProps) => {
  const isFriendMode = useGameStore((s) => s.isFriendMode);

  const mePlayer = useGameStore((s) => s.getMePlayer());
  const goingPlayer = useGameStore((s) => s.getGoingPlayer());

  const currentQuestion = useGameStore(
    (s) => s.data?.roomDataDto.currentQuestion
  );

  const onYes = () => CharadesAPI.answerQuestion({ charadeAnswer: 'YES' });
  const onNo = () => CharadesAPI.answerQuestion({ charadeAnswer: 'NO' });
  const onWtf = () => CharadesAPI.answerQuestion({ charadeAnswer: 'WTF' });

  return (
    <Styled.OthersTurn currentQuestion={currentQuestion}>
      <Styled.Qestion currentQuestion={currentQuestion}>
        <Player
          id={goingPlayer.id}
          className='others-turn-player'
          color='indigo'
          form='tile'
          onClick={() => {
            return;
          }}
          tileContent={{
            label: goingPlayer.state.word,
            outsideLabel: goingPlayer.username,
          }}
          size='large'
        />
        <Player
          id={goingPlayer.id}
          className='others-turn-player-mobile'
          color='indigo'
          form='tile'
          onClick={() => {
            return;
          }}
          tileContent={{
            label: goingPlayer.state.word,
          }}
          size='large'
        />
        <Styled.MessageBubble currentQuestion={currentQuestion}>
          {currentQuestion || (
            <div className='writing-loader'>
              {isFriendMode ? (
                <>It is {goingPlayer.username}'s turn</>
              ) : (
                <>
                  {goingPlayer.username} is writing
                  <br />
                  a question <Loader.InlineDots key='loader' />
                </>
              )}
            </div>
          )}
        </Styled.MessageBubble>
      </Styled.Qestion>

      <Styled.AnswerBubble
        currentQuestion={currentQuestion}
        givenAnswer={mePlayer.state.lastAnswer}
      >
        {!mePlayer.state.lastAnswer ? (
          [
            <Button
              className='my-answer-btn'
              isPrimary
              key='yes'
              onClick={onYes}
              type='success'
            >
              Yes
            </Button>,
            <Button
              className='my-answer-btn'
              isPrimary
              key='mo'
              onClick={onNo}
              type='danger'
            >
              No
            </Button>,
            <Button
              className='my-answer-btn'
              isPrimary
              key='wtf'
              onClick={onWtf}
              type='warning'
            >
              Wtf
            </Button>,
          ]
        ) : (
          <div className='given-answer'>{mePlayer.state.lastAnswer}</div>
        )}
      </Styled.AnswerBubble>
    </Styled.OthersTurn>
  );
};

export default OthersTurn;
