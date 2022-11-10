import { useState } from 'react';
import CharadesAPI from '../../../../../api/game/charades';
import { Game } from '../../../../../common/types/room';
import { UserInGame } from '../../../../../common/types/user';
import Player from '../../Player';
import CurrentUserPlayer from '../../Player/CurrentUserPlayer';
import AnswerQuestion from './AnswerQuestion';
import AnswerVisualizer from './AnswerVisualizer';
import AskQuestion from './AskQuestion';
import CheckWord from './CheckWord';
import QuestionTable from './QuestionTable';

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
  const isMyTurn = currentUserPlayer.state.isGoing;
  const iHaveWon = currentUserPlayer.state.winRound;
  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;
  const iHaveAnsweredQuestion = !!currentUserPlayer.state.lastAnswer;

  const [goingUser] = players.filter((player) => player.state.isGoing);

  return (
    <div>
      <CurrentUserPlayer player={currentUserPlayer} />

      {iHaveWon && (
        <h1 style={{ width: '100%', textAlign: 'center' }}>You've won!</h1>
      )}

      {!iHaveWon && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {isMyTurn && (
            <>
              {questionIsAsked ? (
                <AnswerVisualizer players={players} />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <AskQuestion />
                  <CheckWord />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {!isMyTurn && questionIsAsked && !iHaveAnsweredQuestion && (
        <AnswerQuestion question={gameData.roomDataDto.currentQuestion} />
      )}

      <QuestionTable currentUserPlayer={currentUserPlayer} />

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
