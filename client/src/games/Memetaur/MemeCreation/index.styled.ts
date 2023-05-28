import styled, { css } from 'styled-components';

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

export const Meme = styled.div<{ gifIsSelected: boolean }>`
  margin: 16px 0;
  ${({ gifIsSelected }) =>
    !gifIsSelected &&
    css`
      width: calc(100% - 32px);
      height: calc(100% - 32px);
    `}

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

  background-color: ${({ theme }) =>
    theme.memetaurGame.game.memeCreation.meme.captionBackground};
  color: ${({ theme }) => theme.memetaurGame.game.memeCreation.meme.text};
  border-radius: 16px;
  border: 1px solid
    ${({ theme }) => theme.memetaurGame.game.memeCreation.meme.border};

  .caption {
    word-wrap: break-word;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    box-sizing: border-box;
    padding: 16px;
    border-bottom: 1px solid
      ${({ theme }) => theme.memetaurGame.game.memeCreation.meme.border};
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
    transition: 0.15s ease-in-out;
    &:hover {
      background-color: ${({ theme }) =>
        theme.memetaurGame.game.memeCreation.meme.noGif.backgroundHover};
    }
  }
`;

export const ChooseGif = styled.div<{ isSearching: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.memetaurGame.game.memeCreation.meme.gifBackground};
  padding: 16px;
  border-radius: 0 0 16px 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .search-input {
    width: 100%;
    max-width: 360px;
  }

  .gifs-scroll {
    transition: min-height 0.3s ease-in-out;
    height: 0;
    min-height: calc(100% - 64px);
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;

    .gifs-mansory-wrapper {
      border-radius: 12px;
      columns: 3;
      @media ${mobileAndSmaller} {
        columns: 2;
      }
      column-gap: 12px;

      .gif {
        cursor: pointer;
        display: block;
        margin-bottom: 12px;
        border-radius: 8px;
        width: 100%;
        height: auto;
        border: 1px solid
          ${({ theme }) =>
            theme.memetaurGame.game.memeCreation.meme.selectGif.gif.border};
      }
    }
  }

  ${({ isSearching }) =>
    !isSearching &&
    css`
      .gifs-scroll {
        min-height: 0;
      }
    `}
`;

export const MyGif = styled.div<{}>`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    bottom: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${({ theme }) =>
      theme.memetaurGame.game.memeCreation.meme.myGif.backgroundHover};
    backdrop-filter: blur(4px);

    &:hover {
      opacity: 1;
    }
  }

  img {
    border-radius: 8px;
    object-fit: contain;
    border-radius: 8px;
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;
