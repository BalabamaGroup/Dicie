import { useEffect, useState } from 'react';

import { UserInGame } from '@/common/types/user';
import { thresholds } from '@/common/utils/device';
import SidePanel from '@/components/SidePanel';
import useWindowWidth from '@/hooks/useWindowWidth';
import useColorStore from '@/stores/ColorStore';
import useGameStore from '@/stores/GameStore';

import ActionArea from './ActionArea';
import * as Styled from './index.styled';
import OtherPlayers from './OtherPlayers';

const Setup = () => {
  const mePlayer = useGameStore((s) => s.getMePlayer());
  const otherPlayers = useGameStore((s) => s.getOtherPlayers());

  const isMyTurn = mePlayer.state.isGoing || !!mePlayer.state.selectedUser;
  const isMeReady = mePlayer.state.ready;
  const [highlightedPlayer, setHighlightedPlayer] = useState<UserInGame | null>(
    null
  );

  const isWait = useColorStore((s) => s.color.guessBoo) === 'indigo';
  const setWait = useColorStore((s) => () => s.setWait('guessBoo'));
  const setGo = useColorStore((s) => () => s.setGo('guessBoo'));

  useEffect(() => {
    const localIsGo = isMyTurn && !isMeReady;
    if (localIsGo && isWait) setGo();
    else if (!localIsGo && !isWait) setWait();
  }, [isMyTurn, isMeReady]);

  return (
    <Styled.Setup isWait={isWait}>
      <Styled.SetupContent>
        <ActionArea
          isMyTurn={isMyTurn}
          mePlayer={mePlayer}
          highlightedPlayer={highlightedPlayer}
          setHighlightedPlayer={setHighlightedPlayer}
        />

        <OtherPlayers
          isMyTurn={isMyTurn}
          mePlayer={mePlayer}
          otherPlayers={otherPlayers}
          highlightedPlayer={highlightedPlayer}
          setHighlightedPlayer={setHighlightedPlayer}
        />
      </Styled.SetupContent>

      <SidePanel
        views={[{ id: 'chat' }]}
        // color={isWait ? 'indigo' : 'lime'}
        collapseThreshhold={thresholds.guessBoo.setup.sidePanelCollapse}
        horizontalThreshhold={thresholds.guessBoo.setup.sidePanelHorizontal}
      />
    </Styled.Setup>
  );
};

export default Setup;
