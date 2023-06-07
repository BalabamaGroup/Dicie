import { useEffect, useState } from 'react';

import { UserInGame } from '@/common/types/user';
import { thresholds } from '@/common/utils/device';

import SidePanel from '@/components/SidePanel';

import useWindowWidth from '@/hooks/useWindowWidth';

import useGameStore from '@/stores/GameStore';

import ActionArea from './ActionArea';
import OtherPlayers from './OtherPlayers';
import * as Styled from './index.styled';

const Setup = () => {
  const mePlayer = useGameStore((s) => s.getMePlayer());
  const myTurn = useGameStore((s) => s.myTurn);
  const otherPlayers = useGameStore((s) => s.getOtherPlayers());

  const isMyTurn = mePlayer.state.isGoing || !!mePlayer.state.selectedUser;
  const isMeReady = mePlayer.state.ready;
  const localMyTurn = isMyTurn && !isMeReady;

  const [highlightedPlayer, setHighlightedPlayer] = useState<UserInGame | null>(
    null
  );

  useEffect(() => {
    if (myTurn && !localMyTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: false }));
    else if (!myTurn && localMyTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: true }));
  }, [localMyTurn]);

  return (
    <Styled.Setup isWait={!myTurn}>
      <Styled.SetupContent>
        <ActionArea
          mePlayer={mePlayer}
          highlightedPlayer={highlightedPlayer}
          setHighlightedPlayer={setHighlightedPlayer}
        />

        <OtherPlayers
          mePlayer={mePlayer}
          otherPlayers={otherPlayers}
          highlightedPlayer={highlightedPlayer}
          setHighlightedPlayer={setHighlightedPlayer}
        />
      </Styled.SetupContent>

      <SidePanel
        views={['chat']}
        collapseThreshhold={thresholds.guessBoo.setup.sidePanelCollapse}
        horizontalThreshhold={thresholds.guessBoo.setup.sidePanelHorizontal}
      />
    </Styled.Setup>
  );
};

export default Setup;
