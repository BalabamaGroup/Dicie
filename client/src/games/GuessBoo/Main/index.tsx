import { useEffect } from 'react';

import { thresholds } from '@/common/utils/device';
import SidePanel from '@/components/SidePanel';
import useGameStore from '@/stores/GameStore';

import AnswerVisualizer from './AnswerVisualizer';
import * as Styled from './index.styled';
import MyTurn from './MyTurn';
import OthersTurn from './OthersTurn';
import PlayersCarousel from './PlayersCarousel';
import WinGame from './WinGame';

const Main = () => {
  const isFriendMode = useGameStore((s) => s.data!.isFriendMode);
  const mePlayer = useGameStore((s) => s.getMePlayer());

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
        <WinGame />
        <PlayersCarousel />
        {myTurn ? <MyTurn /> : <OthersTurn />}
        <AnswerVisualizer />
      </Styled.Game>
      <SidePanel
        views={
          isFriendMode
            ? ['chat', 'notes']
            : ['chat', 'guessBooAnswers', 'notes']
        }
        collapseThreshhold={thresholds.guessBoo.main.sidePanelCollapse}
        horizontalThreshhold={thresholds.guessBoo.main.sidePanelHorizontal}
      />
    </Styled.Main>
  );
};

export default Main;
