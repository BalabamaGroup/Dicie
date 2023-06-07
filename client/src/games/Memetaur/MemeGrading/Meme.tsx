import styled, { css } from 'styled-components';

import MemetaurAPI from '@/api/game/memetaur';

import Button from '@/components/Button';

import useGameStore from '@/stores/GameStore';

export const StyledMeme = styled.div<{ isVoted: boolean; isMy: boolean }>`
  max-width: 400px;
  max-height: 400px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) =>
    theme.memetaurGame.game.memeGrading.meme.background};
  border: 1px solid
    ${({ theme }) => theme.memetaurGame.game.memeGrading.meme.border};
  border-radius: 8px;

  .caption {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: auto;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 8px;
    color: ${({ theme }) => theme.memetaurGame.game.memeGrading.meme.text};
    border-bottom: 1px solid
      ${({ theme }) => theme.memetaurGame.game.memeGrading.meme.border};
  }

  ${({ isVoted }) =>
    isVoted &&
    css`
      background: ${({ theme }) =>
        theme.memetaurGame.game.memeGrading.meme.voted.background};
      border: 1px solid
        ${({ theme }) => theme.memetaurGame.game.memeGrading.meme.voted.border};
      .caption {
        color: ${({ theme }) =>
          theme.memetaurGame.game.memeGrading.meme.voted.text};
        border-bottom: 1px solid
          ${({ theme }) =>
            theme.memetaurGame.game.memeGrading.meme.voted.border};
      }
    `}

  .body {
    margin-bottom: auto;
    width: 100%;
    max-height: 280px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    img {
      height: 100%;
      width: auto;
      max-width: 100%;
      border-radius: 8px;
    }
  }

  .overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) =>
      theme.memetaurGame.game.memeGrading.meme.overlayBackground};

    ${({ isVoted, isMy }) =>
      !isVoted && !isMy
        ? css`
            &:hover {
              opacity: 1;
              pointer-events: all;
            }
          `
        : css`
            pointer-events: none;
          `}
  }
`;

interface MemeProps {
  caption: string;
  gif: string;
}

const Meme = ({ caption, gif }: MemeProps) => {
  const myGif = useGameStore((s) => s.getMePlayer().state.gif);
  const votedGif = useGameStore((s) => s.getMePlayer().state.votedGif);
  const onVote = () => MemetaurAPI.voteForGif({ word: gif });

  console.log(myGif === votedGif);

  return (
    <StyledMeme isMy={myGif === gif} isVoted={votedGif === gif}>
      <div className='overlay'>
        <Button isPrimary color='indigo' onClick={onVote}>
          Vote for this meme
        </Button>
      </div>
      <div className='caption'>{caption}</div>
      <div className='body'>
        <img src={gif} alt='' />
      </div>
    </StyledMeme>
  );
};

export default Meme;
