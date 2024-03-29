import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import games from '@/common/constants/games';
import Button from '@/components/Button';
import GameButton from '@/components/GameButton';

import * as Styled from './index.styled';

interface ChooseGameProps {
  onCreateRoom: React.MouseEventHandler<HTMLButtonElement>;
  canCreateRoom: boolean;
  selectedGameId: number | null;
  onSelectGame: Function;
  onToggleIsMobileSetupCompleted: React.MouseEventHandler<HTMLDivElement>;
}

const ChooseGame = ({
  onCreateRoom,
  canCreateRoom,
  selectedGameId,
  onSelectGame,
  onToggleIsMobileSetupCompleted,
}: ChooseGameProps) => {
  return (
    <Styled.ChooseGame className='choose-game'>
      <Styled.Header>
        <div className='arrow-btn' onClick={onToggleIsMobileSetupCompleted}>
          <ReactSVG src='/images/svgs/arrow.left.svg' />
        </div>
        Pick a game
      </Styled.Header>

      <Styled.GameList>
        {games.map((game) => (
          <GameButton
            color='lime'
            key={game.id}
            gameId={game.id}
            isSelected={selectedGameId === game.id}
            onClick={() => onSelectGame(game.id)}
          />
        ))}
      </Styled.GameList>

      <Styled.ButtonWrapper>
        <Button
          color='lime'
          className='choose-game_create-room-button'
          isPrimary
          isScale
          onClick={onCreateRoom}
          size='large'
          isDisabled={!canCreateRoom}
        >
          Create room
        </Button>
      </Styled.ButtonWrapper>
    </Styled.ChooseGame>
  );
};

export default ChooseGame;
