import { useEffect } from 'react';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';

interface useForceSelectProps {
  isMyTurn: boolean;
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
  disabledByLoopsPlayerId: number | null;
  setHighlightedPlayer: Function;
}

const useForceSelect = ({
  isMyTurn,
  mePlayer,
  otherPlayers,
  disabledByLoopsPlayerId,
  setHighlightedPlayer,
}: useForceSelectProps) => {
  useEffect(() => {
    if (!isMyTurn || mePlayer.state.selectedUser) return;
    const avialablePlayers = otherPlayers.filter(
      (player) => !player.state.selectedBy && player.id !== mePlayer.id
    );

    if (avialablePlayers.length === 1) {
      const forceSelectedPlayer = avialablePlayers[0];
      setHighlightedPlayer(forceSelectedPlayer);
      CharadesAPI.selectUser(forceSelectedPlayer.id);
      return;
    }

    if (avialablePlayers.length === 2 && disabledByLoopsPlayerId) {
      const [forceSelectedPlayer] = avialablePlayers.filter(
        (player) => player.id !== disabledByLoopsPlayerId
      );
      setHighlightedPlayer(forceSelectedPlayer);
      CharadesAPI.selectUser(forceSelectedPlayer.id);
      return;
    }
  }, [isMyTurn]);
};

export default useForceSelect;
