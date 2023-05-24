import styled from 'styled-components';

import games from '@/common/constants/games';
import GameButton from '@/components/GameButton';

export const StyledGameSelector = styled.div<{}>`
  width: 100%;
  padding: 0 48px;
  box-sizing: border-box;
  display: flex;
  align-items: start;
  gap: 12px;
`;

interface GameSelectorProps {
  selectedGames: number[];
  onToggleGameSelection: Function;
}

const GameSelector = ({
  selectedGames,
  onToggleGameSelection,
}: GameSelectorProps) => {
  return (
    <StyledGameSelector>
      {games.map((g) => (
        <GameButton
          key={g.id}
          color='indigo'
          gameId={g.id}
          isSelected={selectedGames.includes(g.id)}
          onClick={() => onToggleGameSelection(g.id)}
        />
      ))}
    </StyledGameSelector>
  );
};

export default GameSelector;
