import styled from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

export const MemeCreation = styled.div<{}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    margin: 32px 16px 16px 16px;
    font-weight: 800;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    color: ${({ theme }) =>
      theme.memetaurGame.game.captionSetup.myTurn.header.textMain};
  }
`;

export const Meme = styled.div<{}>`
  margin: 16px 0;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${mobileAndSmaller} {
    margin: 8px 0;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
  }

  background-color: white;
  border-radius: 16px;
  border: 1px solid grey;

  .caption {
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    box-sizing: border-box;
    padding: 16px 0;
    border-bottom: 1px solid grey;
  }
`;

export const Gif = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .nogif {
    cursor: pointer;
    width: 100%;
    height: calc(100% - 32px);
    border-radius: 14px;
    margin: 16px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    font-weight: 800;
    font-size: 16px;
    line-height: 16px;
    &:hover {
      background-color: grey;
    }
  }
`;

export const ChooseGif = styled.div<{}>`
  width: 100%;
  height: 100%;
  background-color: #fcfde5;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .search-input {
    max-width: 320px;
  }

  .gifs-scroll {
    height: 0;
    min-height: calc(100% - 64px);
    width: 100%;

    .gifs-mansory-wrapper {
      border-radius: 12px;
      columns: 3;
      @media ${mobileAndSmaller} {
        columns: 2;
      }
      column-gap: 12px;

      img {
        cursor: pointer;
        display: block;
        margin-bottom: 12px;
        border-radius: 8px;
        width: 100%;
        height: auto;
        border: 1px solid grey;
      }
    }
  }
`;
