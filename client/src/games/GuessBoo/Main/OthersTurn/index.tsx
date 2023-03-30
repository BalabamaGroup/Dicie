import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Loader from '@/components/Loader';
import Player from '@/components/Player';

import * as Styled from './index.styled';

interface OthersTurnProps {
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
  currentQuestion: string | null;
}

const OthersTurn = ({
  mePlayer,
  otherPlayers,
  currentQuestion,
}: OthersTurnProps) => {
  const [goingUser] = otherPlayers.filter((player) => player.state.isGoing);

  const onYes = () => CharadesAPI.answerQuestion({ charadeAnswer: 'YES' });
  const onNo = () => CharadesAPI.answerQuestion({ charadeAnswer: 'NO' });
  const onWtf = () => CharadesAPI.answerQuestion({ charadeAnswer: 'WTF' });

  return (
    <Styled.OthersTurn currentQuestion={currentQuestion}>
      <Styled.Qestion currentQuestion={currentQuestion}>
        <Player
          className='others-turn-player'
          color='indigo'
          form='tile'
          onClick={() => {
            return;
          }}
          tileContent={{
            label: goingUser.state.word,
            outsideLabel: goingUser.username,
          }}
          size='large'
        />
        <Player
          className='others-turn-player-mobile'
          color='indigo'
          form='tile'
          onClick={() => {
            return;
          }}
          tileContent={{
            label: goingUser.state.word,
          }}
          size='large'
        />
        <Styled.MessageBubble currentQuestion={currentQuestion}>
          {currentQuestion || [
            `${goingUser.username} is writing a question `,
            <Loader.InlineDots key='loader' />,
          ]}
        </Styled.MessageBubble>
      </Styled.Qestion>

      <Styled.AnswerBubble
        currentQuestion={currentQuestion}
        givenAnswer={mePlayer.state.lastAnswer}
      >
        {!mePlayer.state.lastAnswer ? (
          [
            <Styled.Yes key='yes' onClick={onYes}>
              Yes
            </Styled.Yes>,
            <Styled.No key='no' onClick={onNo}>
              No
            </Styled.No>,
            <Styled.Wtf key='wtf' onClick={onWtf}>
              Wtf
            </Styled.Wtf>,
          ]
        ) : (
          <div className='given-answer'>{mePlayer.state.lastAnswer}</div>
        )}
      </Styled.AnswerBubble>
    </Styled.OthersTurn>
  );
};

export default OthersTurn;
