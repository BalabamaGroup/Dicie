import Player from '@/components/Player';
import useGameStore from '@/stores/GameStore';
import styled, { css } from 'styled-components';

export const StyledPlayerWithIndicator = styled.div<{
  lastAnswer: 'YES' | 'NO' | 'WTF' | null;
}>`
  width: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 8px;

  transition: margin 0.3s ease-in-out !important;
  margin-top: ${({ lastAnswer }) => (!lastAnswer ? '24px' : '12px')};
  margin-bottom: ${({ lastAnswer }) => (!lastAnswer ? '-8px' : '4px')};
`;

export const StyledIndicator = styled.div<{
  myTurn: boolean;
  lastAnswer: 'YES' | 'NO' | 'WTF' | null;
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out, background 0.3s ease-in-out,
    border 0.3s ease-in-out;

  opacity: ${({ lastAnswer }) => (lastAnswer ? 1 : 0)};

  ${({ lastAnswer, myTurn, theme }) =>
    lastAnswer === 'YES' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.yesWait
        : theme.guessBooGame.main.game.yesGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.yesWaitBorder
          : theme.guessBooGame.main.game.yesGoBorder};
    `};

  ${({ lastAnswer, myTurn, theme }) =>
    lastAnswer === 'NO' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.noWait
        : theme.guessBooGame.main.game.noGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.noWaitBorder
          : theme.guessBooGame.main.game.noGoBorder};
    `};

  ${({ lastAnswer, myTurn, theme }) =>
    lastAnswer === 'WTF' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.wtfWait
        : theme.guessBooGame.main.game.wtfGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.wtfWaitBorder
          : theme.guessBooGame.main.game.wtfGoBorder};
    `};
`;

interface PlayerWithIndicatorProps {
  id: number;
  lastAnswer: 'YES' | 'NO' | 'WTF' | null;

  isHighlighted: boolean;
  tileContent: {
    label: string | null;
    outsideLabel: string;
  };
}

const PlayerWithIndicator = ({
  lastAnswer,
  ...rest
}: PlayerWithIndicatorProps) => {
  const myTurn = useGameStore((s) => s.myTurn);

  return (
    <StyledPlayerWithIndicator lastAnswer={lastAnswer}>
      <Player
        color={myTurn ? 'lime' : 'indigo'}
        size={'medium'}
        form={'tile'}
        canBeHighlighted
        {...rest}
      />
      <StyledIndicator myTurn={myTurn} lastAnswer={lastAnswer} />
    </StyledPlayerWithIndicator>
  );
};

export default PlayerWithIndicator;
