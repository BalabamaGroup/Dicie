import { useEffect } from 'react';

import { UserInGame } from '@/common/types/user';
import { thresholds } from '@/common/utils/device';

import Player from '@/components/Player';
import Scroll from '@/components/Scroll';

import useWindowWidth from '@/hooks/useWindowWidth';

import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';
import useForceSelect from './useForceSelect';

interface OtherPlayersProps {
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
  highlightedPlayer: UserInGame | null;
  setHighlightedPlayer: Function;
}

const OtherPlayers = ({
  mePlayer,
  otherPlayers,
  highlightedPlayer,
  setHighlightedPlayer,
}: OtherPlayersProps) => {
  const myTurn = useGameStore((s) => s.myTurn);
  const color = useGameStore((s) => s.getColor());

  const disabledByLoopsPlayerId = (() => {
    const avialablePlayers = otherPlayers.filter(
      (p) => !p.state.selectedBy && p.id !== mePlayer.id
    );
    if (avialablePlayers.length !== 2) return null;
    const disabledPlayer = avialablePlayers.filter((p) => p.state.selectedUser);
    return disabledPlayer.length ? disabledPlayer[0].id : null;
  })();

  const onHighlightPlayer = (player: UserInGame) => {
    if (!myTurn) return;
    if (mePlayer.state.selectedUser) return;
    if (player.state.selectedBy) return;
    if (disabledByLoopsPlayerId === player.id) return;
    setHighlightedPlayer(player);
  };

  const displayWidth = useWindowWidth(100);
  const isRow =
    (displayWidth > thresholds.guessBoo.setup.sidePanelCollapse &&
      displayWidth < 1600) ||
    (displayWidth > thresholds.guessBoo.setup.sidePanelHorizontal + 1 &&
      displayWidth < 1300) ||
    displayWidth < 1000;

  // highlight user on refresh
  useEffect(() => {
    const [selectedPlayer] = otherPlayers.filter(
      (player) => player.id === mePlayer.state.selectedUser
    );
    if (!selectedPlayer) return;
    setHighlightedPlayer(selectedPlayer);
  }, []);

  useForceSelect({
    isMyTurn: myTurn,
    mePlayer,
    otherPlayers,
    disabledByLoopsPlayerId,
    setHighlightedPlayer,
  });

  return (
    <Styled.OtherPlayersWrapper isWait={!myTurn}>
      <Scroll color={color} className='other-players-scroll'>
        <Styled.OtherPlayers isRow={isRow}>
          {otherPlayers.map((player) => (
            <Player
              id={player.id}
              color={color}
              form={isRow ? 'row' : 'tile'}
              className='game-setup-other-player'
              size='large'
              key={player.id}
              canBeHighlighted
              isHighlighted={highlightedPlayer?.id === player.id}
              isClickable={!myTurn}
              onClick={() => onHighlightPlayer(player)}
              tileContent={{
                label: player.state.word,
                labelIsLoading: !!player.state.selectedBy && !player.state.word,
                outsideLabel: player.username,
              }}
              rowContent={{
                label: player.state.word,
                labelIsLoading: !!player.state.selectedBy && !player.state.word,
                mainTop: player.username,
                mainBottom: player.state.selectedBy
                  ? `selected by ${
                      otherPlayers.filter(
                        (p) => player.state.selectedBy === p.id
                      )[0]?.username || 'you'
                    }`
                  : '',
              }}
              isDisabled={
                !myTurn &&
                !mePlayer.state.selectedUser &&
                (!!player.state.selectedBy ||
                  disabledByLoopsPlayerId === player.id)
              }
            />
          ))}
        </Styled.OtherPlayers>
      </Scroll>
    </Styled.OtherPlayersWrapper>
  );
};

export default OtherPlayers;
