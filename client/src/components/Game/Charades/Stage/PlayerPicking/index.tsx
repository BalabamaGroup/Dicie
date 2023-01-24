import { useEffect, useState } from 'react';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';

import BottomContent from './BottomContent/index';
import * as Styled from './index.styled';
import Player from './Player';
import TopMessage from './TopMessage/index.';

interface PlayerPickingStageProps {
  currentUserPlayer: UserInGame;
  players: UserInGame[];
}

const PlayerPickingStage = ({
  currentUserPlayer,
  players,
}: PlayerPickingStageProps) => {
  const [highlightedUserId, setHighlightedUserId] = useState<number | null>(
    currentUserPlayer.state.selectedUser
  );
  const [highlightedUser] = players.filter(
    (player) => player.id === highlightedUserId
  );
  const [selectedUser] = players.filter(
    (player) => player.id === currentUserPlayer.state.selectedUser
  );

  const isCurrentUserTurn =
    currentUserPlayer.state.isGoing && !currentUserPlayer.state.selectedUser;
  const isUserHighlighted = !!highlightedUserId;
  const isUserSelected = !!currentUserPlayer.state.selectedUser;
  const isCharacterSet = !!selectedUser?.state.word;
  const isReady = currentUserPlayer.state.ready;

  const getDisabledByLoopsPlayerId = () => {
    const avialablePlayers = players.filter(
      (player) => !player.state.selectedBy && player.id !== currentUserPlayer.id
    );

    if (avialablePlayers.length !== 2) return null;

    const disabledPlayer = avialablePlayers.filter(
      (player) => player.state.selectedUser
    );

    return disabledPlayer.length ? disabledPlayer[0].id : null;
  };

  useEffect(() => {
    if (!isCurrentUserTurn || currentUserPlayer.state.selectedUser) return;
    const avialablePlayers = players.filter(
      (player) => !player.state.selectedBy && player.id !== currentUserPlayer.id
    );

    if (avialablePlayers.length !== 1) return;
    CharadesAPI.selectUser(avialablePlayers[0].id);
    setHighlightedUserId(avialablePlayers[0].id);
  }, [isCurrentUserTurn]);

  return (
    <Styled.PlayerPickingStage>
      <Styled.PlayersList>
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            isCurrentUserTurn={isCurrentUserTurn}
            isHighlighted={highlightedUserId === player.id}
            setHighlightedUserId={setHighlightedUserId}
            disabledByLoopsPlayerId={getDisabledByLoopsPlayerId()}
          />
        ))}
      </Styled.PlayersList>

      {isCharacterSet && (
        <div className='mobile-ready-button-wrapper'>
          <Button
            className='mobile-ready-button'
            onClick={() => CharadesAPI.setReady()}
            isPrimary
            isScale
          >
            {isReady ? "I'm not ready" : 'I am ready!'}
          </Button>
        </div>
      )}

      <Styled.CurrentPlayer>
        <TopMessage
          isCurrentUserTurn={isCurrentUserTurn}
          isUserSelected={isUserSelected}
          isCharacterSet={isCharacterSet}
          isReady={isReady}
        />
        <div className='current-user-avatar'></div>
        <BottomContent
          highlightedUser={highlightedUser}
          selectedUser={selectedUser}
          isUserHighlighted={isUserHighlighted}
          isUserSelected={isUserSelected}
          isCharacterSet={isCharacterSet}
          isReady={isReady}
        />
      </Styled.CurrentPlayer>
    </Styled.PlayerPickingStage>
  );
};

export default PlayerPickingStage;
