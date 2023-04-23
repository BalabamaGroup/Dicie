import { useEffect } from 'react';

import { thresholds } from '@/common/utils/device';
import SidePanel from '@/components/SidePanel';
import useWindowWidth from '@/hooks/useWindowWidth';
import useGameStore from '@/stores/GameStore';

import AnswerVisualizer from './AnswerVisualizer';
import * as Styled from './index.styled';
import MyTurn from './MyTurn';
import OthersTurn from './OthersTurn';
import PlayersCarousel from './PlayersCarousel';

const Main = () => {
  const gameData = useGameStore((s) => s.data!);
  const mePlayer = useGameStore((s) => s.getMePlayer());
  const otherPlayers = useGameStore((s) => s.getOtherPlayers());

  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;

  const iHaveAnsweredQuestion = !!mePlayer.state.lastAnswer;
  const iHaveWon = mePlayer.state.winRound;

  const myTurnLocal = mePlayer.state.isGoing;
  const myTurn = useGameStore((s) => s.myTurn);
  useEffect(() => {
    if (myTurnLocal && !myTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: true }));
    else if (!myTurnLocal && myTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: false }));
  }, [myTurnLocal]);

  return (
    <Styled.Main myTurn={myTurn}>
      <Styled.Game myTurn={myTurn}>
        <div className='top-info'>
          {<PlayersCarousel otherPlayers={otherPlayers} />}
        </div>

        {myTurnLocal ? (
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
        views={[{ id: 'chat' }, { id: 'guessBooAnswers', data: [] }]}
        collapseThreshhold={thresholds.guessBoo.main.sidePanelCollapse}
        horizontalThreshhold={thresholds.guessBoo.main.sidePanelHorizontal}
      />
    </Styled.Main>
  );
};

export default Main;
