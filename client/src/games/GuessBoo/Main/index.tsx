import { useEffect } from 'react';

import { Game } from '@/common/types/room';
import { UserInGame } from '@/common/types/user';
import { thresholds } from '@/common/utils/device';
import Player from '@/components/Player';
import SidePanel from '@/components/SidePanel';
import useWindowWidth from '@/hooks/useWindowWidth';
import { useColorStore } from '@/stores/ColorStore';

import AnswerVisualizer from './AnswerVisualizer';
import * as Styled from './index.styled';
import MyTurn from './MyTurn';
import OthersTurn from './OthersTurn';
import PlayersCarousel from './PlayersCarousel';

interface MainStageProps {
  gameData: Game;
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
}

const Main = ({ gameData, mePlayer, otherPlayers }: MainStageProps) => {
  const isMyTurn = mePlayer.state.isGoing;
  const [goingUser] = otherPlayers.filter((player) => player.state.isGoing);

  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;

  const iHaveAnsweredQuestion = !!mePlayer.state.lastAnswer;
  const iHaveWon = mePlayer.state.winRound;

  const displayWidth = useWindowWidth(100);

  const color = useColorStore((s) => s.color.guessBoo);
  const setWait = useColorStore((s) => () => s.setWait('guessBoo'));
  const setGo = useColorStore((s) => () => s.setGo('guessBoo'));
  useEffect(() => {
    if (isMyTurn && color !== 'indigo') setGo();
    else if (!isMyTurn && color !== 'lime') setWait();
  }, [isMyTurn]);

  return (
    <Styled.Main isMyTurn={isMyTurn}>
      <Styled.Game isMyTurn={isMyTurn}>
        <div className='top-info'>
          {<PlayersCarousel otherPlayers={otherPlayers} />}
          {!isMyTurn && (
            <div className='turn-info'>
              {/* <span className='turn-info-username'>
                It is {goingUser.username}'s turn
                <br />
                Their character is {goingUser.state.word}
              </span> */}
            </div>
          )}
        </div>

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
      <SidePanel
        color={isMyTurn ? 'lime' : 'indigo'}
        isCollapsed={displayWidth <= thresholds.guessBoo.main.sidePanelCollapse}
        isHorizontal={
          displayWidth <= thresholds.guessBoo.main.sidePanelHorizontal
        }
      />
    </Styled.Main>
  );
};

export default Main;
