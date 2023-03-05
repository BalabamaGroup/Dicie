import { Game } from '@/common/types/room';
import { UserInGame } from '@/common/types/user';

import AnswerVisualizer from './AnswerVisualizer';
import * as Styled from './index.styled';
import MyTurn from './MyTurn';
import OthersTurn from './OthersTurn';
import PlayersCarousel from './PlayersCarousel';
import SidePanel from './SidePanel';

interface MainStageProps {
  gameData: Game;
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
}

const Main = ({ gameData, mePlayer, otherPlayers }: MainStageProps) => {
  const isMyTurn = mePlayer.state.isGoing;

  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;

  const iHaveAnsweredQuestion = !!mePlayer.state.lastAnswer;
  const iHaveWon = mePlayer.state.winRound;

  return (
    <Styled.Main isMyTurn={isMyTurn}>
      <Styled.Game>
        <PlayersCarousel otherPlayers={otherPlayers} />

        {isMyTurn ? (
          <MyTurn
            otherPlayers={otherPlayers}
            gameState={gameData.roomDataDto}
          />
        ) : (
          <OthersTurn
            mePlayer={mePlayer}
            otherPlayers={otherPlayers}
            currentQuestion={gameData.roomDataDto.currentQuestion}
          />
        )}

        <AnswerVisualizer
          otherPlayers={otherPlayers}
          mePlayer={mePlayer}
          questionIsAsked={questionIsAsked}
        />
      </Styled.Game>
      <SidePanel />
    </Styled.Main>
  );
};

export default Main;
