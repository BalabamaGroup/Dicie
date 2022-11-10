import { useState } from 'react';
import CharadesAPI from '../../../../../api/game/charades';
import { Game } from '../../../../../common/types/room';
import { UserInGame } from '../../../../../common/types/user';
import Player from '../../Player';
import CurrentUserPlayer from '../../Player/CurrentUserPlayer';

interface MainStageProps {
  gameData: Game;
  currentUserPlayer: UserInGame;
  players: UserInGame[];
}

const MainStage = ({
  gameData,
  currentUserPlayer,
  players,
}: MainStageProps) => {
  const [question, setQuestion] = useState('');
  const onChangeQuestion = (e: any) => setQuestion(e.target.value);

  const onAskQuestion = () => {
    CharadesAPI.askQuestion({ question });
  };

  const onAnsewerQuestion = (charadeAnswer: string) => {
    CharadesAPI.answerQuestion({ charadeAnswer });
  };

  const onAcceptAnswer = () => {
    CharadesAPI.acceptAnswer();
  };

  const [goingUser] = players.filter((player) => player.state.isGoing);

  const calculateAnswerData = () => {
    const result = { YES: 0, NO: 0, WTF: 0, count: 0 };
    players.forEach((player) => {
      if (player.state.lastAnswer) {
        result[player.state.lastAnswer]++;
        result.count++;
      }
    });

    return result;
  };

  const answerData = calculateAnswerData();

  return (
    <div>
      <CurrentUserPlayer player={currentUserPlayer} />

      {currentUserPlayer.state.isGoing && (
        <>
          {gameData.roomDataDto.currentQuestion ? (
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    width: `${(answerData.YES * 100) / players.length}%`,
                    height: '50px',
                    background: 'green',
                  }}
                ></div>
                <div
                  style={{
                    width: `${(answerData.NO * 100) / players.length}%`,
                    height: '50px',
                    background: 'red',
                  }}
                ></div>
                <div
                  style={{
                    width: `${(answerData.WTF * 100) / players.length}%`,
                    height: '50px',
                    background: 'grey',
                  }}
                ></div>
                <div
                  style={{
                    width: `${
                      (100 / players.length) *
                      (players.length - answerData.count)
                    }%`,
                    height: '50px',
                    background: 'lightgray',
                  }}
                />
              </div>
              {answerData.count === players.length && (
                <div onClick={onAcceptAnswer}>
                  <button>Accept answer</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <input type='text' value={question} onChange={onChangeQuestion} />
              <button onClick={onAskQuestion}>Submit</button>
            </>
          )}
        </>
      )}

      {!currentUserPlayer.state.isGoing &&
        gameData.roomDataDto.currentQuestion &&
        !currentUserPlayer.state.lastAnswer && (
          <>
            <div>{gameData.roomDataDto.currentQuestion}</div>
            <button onClick={() => onAnsewerQuestion('YES')}>Yes</button>
            <button onClick={() => onAnsewerQuestion('NO')}>No</button>
            <button onClick={() => onAnsewerQuestion('WTF')}>Wtf</button>
          </>
        )}

      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          currentUserPlayer={currentUserPlayer}
        />
      ))}
    </div>
  );
};

export default MainStage;
