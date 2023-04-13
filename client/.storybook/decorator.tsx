import React from 'react';
import styled from 'styled-components';

import useGameStore from '../src/stores/GameStore';
import useThemeStore from '../src/stores/ThemeStore';
import colors from '../src/styles/colors/colors';

const StyledDecorator = styled.div<{
  theme: 'light' | 'dark';
  myTurn: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme, myTurn }) =>
    theme === 'light'
      ? !myTurn
        ? colors.indigo[20]
        : colors.lime[20]
      : !myTurn
      ? colors.indigo[80]
      : colors.lime[80]};

  .controls {
    margin-top: 12px;
    cursor: pointer;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .option {
      padding: 0 24px;
      border-radius: 12px;
      width: 96px;
      height: 48px;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: space-around;

      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

      color: ${({ theme, myTurn }) =>
        theme === 'light'
          ? !myTurn
            ? colors.indigo.text.dark
            : colors.lime.text.dark
          : !myTurn
          ? colors.indigo.text.light
          : colors.lime.text.light};

      background-color: ${({ theme, myTurn }) =>
        theme === 'light'
          ? !myTurn
            ? colors.indigo[0]
            : colors.lime[0]
          : !myTurn
          ? colors.indigo[100]
          : colors.lime[100]};
    }
  }

  .story {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Decorator = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme: any = useThemeStore((s) => s.toggleTheme);

  const myTurn = useGameStore((s) => s.myTurn);
  const toggleMyTurn = () => {
    if (myTurn) useGameStore.setState((s) => ({ ...s, myTurn: false }));
    else useGameStore.setState((s) => ({ ...s, myTurn: true }));
  };

  return (
    <StyledDecorator theme={theme} myTurn={myTurn}>
      <div className='controls'>
        <div className='option' onClick={toggleTheme}>
          Toggle Theme
        </div>
        <div className='option' onClick={toggleMyTurn}>
          Toggle My Turn
        </div>
      </div>

      <div className='story'>{children}</div>
    </StyledDecorator>
  );
};

export default Decorator;
