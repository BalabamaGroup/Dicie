import { useState } from 'react';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';

import * as Styled from './index.styled';

interface CharadeUserProps {
  stage?: 'main' | 'playerPicking';
  player: UserInGame;
  currentUserPlayer: UserInGame;
}

const Player = ({
  stage = 'main',
  player,
  currentUserPlayer,
}: CharadeUserProps) => {
  const isCurrentUserTurn =
    currentUserPlayer.state.isGoing && !currentUserPlayer.state.selectedUser;

  const [word, setWord] = useState('');
  const onChangeWord = (e: any) => setWord(e.target.value);

  const onSelectUser = () => {
    isCurrentUserTurn &&
      !player.state.selectedBy &&
      CharadesAPI.selectUser(player.id);
  };

  const onSetWord = () => {
    if (typeof word === 'string') CharadesAPI.setWord(player.id, { word });
    setWord('');
  };

  return (
    <Styled.Player
      isTakingATurn={player.state.isGoing && !player.state.selectedUser}
      canBeSelected={isCurrentUserTurn}
      isAvailableForSelection={!player.state.selectedBy}
      isSelected={player.state.selectedBy === currentUserPlayer.id}
      stage={stage}
    >
      <div onClick={onSelectUser}>
        <p>
          {player.username} {`- ${player.state.word}`}
        </p>
        <div>
          {player.state.selectedBy === currentUserPlayer.id &&
            stage === 'playerPicking' && (
              <>
                <input
                  type='text'
                  disabled={+sessionStorage.id === player.id}
                  value={word}
                  onChange={onChangeWord}
                />
                <button onClick={onSetWord}>Submit</button>
              </>
            )}
        </div>
      </div>
    </Styled.Player>
  );
};

export default Player;
