import React from 'react';
import styled, { css } from 'styled-components';

import useGameStore from '../src/stores/GameStore';
import useThemeStore from '../src/stores/ThemeStore';
import colors from '../src/styles/colors/colors';

const StyledDecorator = styled.div<{
  theme: 'light' | 'dark';
  myTurn: boolean;
}>`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  box-sizing: border-box;

  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme, myTurn }) =>
    theme === 'light'
      ? !myTurn
        ? colors.indigo[10]
        : colors.lime[10]
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
      width: 100px;
      height: 48px;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: 700;

      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      border: 2px solid
        ${({ theme, myTurn }) =>
          theme === 'light'
            ? !myTurn
              ? colors.indigo[60]
              : colors.lime[60]
            : !myTurn
            ? colors.indigo[70]
            : colors.lime[70]};

      color: ${({ theme, myTurn }) =>
        theme === 'light'
          ? !myTurn
            ? colors.indigo[90]
            : colors.lime[80]
          : !myTurn
          ? colors.indigo[0]
          : colors.lime[0]};

      background-color: ${({ theme, myTurn }) =>
        theme === 'light'
          ? !myTurn
            ? colors.indigo[0]
            : colors.lime[0]
          : !myTurn
          ? colors.indigo[90]
          : colors.lime[90]};
    }
  }

  .story {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    font-family: Nunito;
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
          Theme
        </div>
        <div className='option' onClick={toggleMyTurn}>
          Color
        </div>
      </div>

      <div className='story'>{children}</div>
    </StyledDecorator>
  );
};

export default Decorator;
