import { Game } from '@/common/types/room';
import { UserInGame } from '@/common/types/user';

import AnswerQuestion from './AnswerQuestion';
import AnswerVisualizer from './AnswerVisualizer';
import AskQuestion from './AskQuestion';
import CheckWord from './CheckWord';
import PlayersSlider from './PlayersSlider';
import QuestionTable from './QuestionTable';

interface MainStageProps {
  gameData: Game;
  currentUserPlayer: UserInGame;
  players: UserInGame[];
}

const Main = ({ gameData, currentUserPlayer, players }: MainStageProps) => {
  const isMyTurn = currentUserPlayer.state.isGoing;
  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;
  const iHaveAnsweredQuestion = !!currentUserPlayer.state.lastAnswer;
  const iHaveWon = currentUserPlayer.state.winRound;

  const [goingUser] = players.filter((player) => player.state.isGoing);

  return (
    <div>
      <PlayersSlider />

      {/* <CurrentUserPlayer player={currentUserPlayer} /> */}

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

      <h3>{currentUserPlayer.points}</h3>

      {players.map((player) => (
        // <Player
        //   key={player.id}
        //   player={player}
        //   currentUserPlayer={currentUserPlayer}
        // />
        <div>{player.email}</div>
      ))}
    </div>
  );
};

export default Main;
