import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';

import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

const StyledGuessBooAnswerIndicator = styled.div<{
  answer: 'YES' | 'NO' | 'WTF';
  myTurn: boolean;
}>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;

  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;

  ${({ answer, myTurn, theme }) =>
    answer === 'YES' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.yesWait
        : theme.guessBooGame.main.game.yesGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.yesWaitBorder
          : theme.guessBooGame.main.game.yesGoBorder};
    `};

  ${({ answer, myTurn, theme }) =>
    answer === 'NO' &&
    css`
      background: ${!myTurn
        ? theme.guessBooGame.main.game.noWait
        : theme.guessBooGame.main.game.noGo};
      border: 1px solid
        ${!myTurn
          ? theme.guessBooGame.main.game.noWaitBorder
          : theme.guessBooGame.main.game.noGoBorder};
    `};

  ${({ answer, myTurn, theme }) =>
    answer === 'WTF' &&
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

export const StyledIcon = styled.div<{}>`
  width: 12px;
  height: 12px;
  * {
    max-width: 12px;
    max-height: 12px;
  }
  svg {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    path {
      transition: fill 0.3s ease-in-out;
      fill: ${({ theme }) =>
        theme.chat.specialMessage.guessBooAnswerIndicatorIcon};
    }
  }
`;

interface GuessBooAnswerIndicatorProps {
  answer: 'YES' | 'NO' | 'WTF';
}

const GuessBooAnswerIndicator = ({ answer }: GuessBooAnswerIndicatorProps) => {
  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  const myTurn = useGameStore((s) => s.myTurn);

  let icon;
  if (answer == 'YES') icon = '/images/svgs/check.svg';
  else if (answer == 'NO') icon = '/images/svgs/cross.svg';
  else icon = '/images/svgs/question-mark.svg';

  return (
    <StyledGuessBooAnswerIndicator answer={answer} myTurn={myTurn}>
      <StyledIcon theme={componentTheme}>
        <ReactSVG src={icon} />
      </StyledIcon>
    </StyledGuessBooAnswerIndicator>
  );
};

export default GuessBooAnswerIndicator;
