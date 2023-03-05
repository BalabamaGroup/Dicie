import { useEffect, useState } from 'react';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';
import Player from '@/components/Player';

import BottomContent from './BottomContent/index';
import * as Styled from './index.styled';
import TopMessage from './TopMessage/index.';

interface SetupProps {
  mePlayer: UserInGame;
  otherPlayers: UserInGame[];
}

const Setup = ({ mePlayer, otherPlayers }: SetupProps) => {
  const [highlightedUserId, setHighlightedUserId] = useState<number | null>(
    mePlayer.state.selectedUser
  );
  const [highlightedUser] = otherPlayers.filter(
    (player) => player.id === highlightedUserId
  );
  const [selectedUser] = otherPlayers.filter(
    (player) => player.id === mePlayer.state.selectedUser
  );

  const isCurrentUserTurn =
    mePlayer.state.isGoing && !mePlayer.state.selectedUser;
  const isUserHighlighted = !!highlightedUserId;
  const isUserSelected = !!mePlayer.state.selectedUser;
  const isCharacterSet = !!selectedUser?.state.word;
  const isReady = mePlayer.state.ready;

  const getDisabledByLoopsPlayerId = () => {
    const avialablePlayers = otherPlayers.filter(
      (player) => !player.state.selectedBy && player.id !== mePlayer.id
    );
    if (avialablePlayers.length !== 2) return null;
    const disabledPlayer = avialablePlayers.filter(
      (player) => player.state.selectedUser
    );
    return disabledPlayer.length ? disabledPlayer[0].id : null;
  };

  const disabledByLoopsPlayerId = getDisabledByLoopsPlayerId();

  const onSelectUser = (player: UserInGame) => {
    if (
      !isCurrentUserTurn ||
      player.state.selectedBy ||
      (disabledByLoopsPlayerId && disabledByLoopsPlayerId === player.id)
    )
      return;
    setHighlightedUserId(player.id);
  };

  useEffect(() => {
    if (!isCurrentUserTurn || mePlayer.state.selectedUser) return;
    const avialablePlayers = otherPlayers.filter(
      (player) => !player.state.selectedBy && player.id !== mePlayer.id
    );

    if (avialablePlayers.length !== 1) return;
    CharadesAPI.selectUser(avialablePlayers[0].id);
    setHighlightedUserId(avialablePlayers[0].id);
  }, [isCurrentUserTurn]);

  return (
    <Styled.Setup>
      <Styled.PlayersList>
        {otherPlayers.map((player) => (
          <Player
            size='large'
            key={player.id}
            canBeHighlighted
            isHighlighted={highlightedUserId === player.id}
            isClickable={isCurrentUserTurn}
            onClick={() => onSelectUser(player)}
            label={player.state.word}
            outsideLabel={player.username}
            isDisabled={
              isCurrentUserTurn &&
              (!!player.state.selectedBy ||
                disabledByLoopsPlayerId === player.id)
            }
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
    </Styled.Setup>
  );
};

export default Setup;
