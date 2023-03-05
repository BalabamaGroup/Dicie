import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const Main = styled.div<{
  isMyTurn: boolean;
}>`
  width: 100%;
  height: calc(100vh - 64px);
  @media ${tabletAndSmaller} {
    height: 100vh;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;

  box-sizing: border-box;
  padding: 32px 20px 20px 20px;

  background: linear-gradient(178.62deg, #8986f5 0%, #be86f5 100%);
  /* 
  ${({ isMyTurn }) =>
    isMyTurn &&
    css`
      background: linear-gradient(178.62deg, #8986f5 0%, #be86f5 100%);
    `} */
`;

export const Game = styled.div<{}>`
  width: 100%;
  height: 100%;

  background: #eceefe;

  box-sizing: border-box;
  border-radius: 32px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
