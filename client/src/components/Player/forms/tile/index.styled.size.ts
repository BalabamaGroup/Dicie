import styled, { css } from 'styled-components';

//  player-wrapper
//    highlight-wrapper
//      player
//        player-label
//   player-outside-label

const small = css`
  height: 92px;
  width: 64px;
  .highlight-wrapper {
    border-radius: 16px;
    .player {
      height: 64px;
      width: 64px;
      border-radius: 12px;
      .player-label {
        display: none;
      }
    }
  }

  .player-outside-label {
    max-width: 64px;
    font-size: 11px;
    line-height: 11px;
  }
`;

const medium = css`
  height: 128px;
  width: 96px;
  .highlight-wrapper {
    border-radius: 20px;
    .player {
      height: 96px;
      width: 96px;
      border-radius: 16px;
      .player-label {
        border-radius: 4px;
        margin: 4px 8px 0 8px;
        .character {
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
  .player-outside-label {
    max-width: 96px;
    font-size: 12px;
    line-height: 12px;
  }
`;

const large = css`
  height: 176px;
  width: 144px;
  .highlight-wrapper {
    box-sizing: border-box;
    border-radius: 30px;
    .player {
      height: 144px;
      width: 144px;
      border-radius: 24px;
      .player-label {
        border-radius: 6px;
        margin: 8px 12px 0 12px;
        .character {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }

  .player-outside-label {
    max-width: 144px;
    font-size: 14px;
    line-height: 14px;
  }
`;

const extraLarge = css`
  height: 224px;
  width: 196px;
  .highlight-wrapper {
    border-radius: 36px;
    .player {
      height: 196px;
      width: 196px;
      border-radius: 32px;
      .player-label {
        height: 48px;
        height: min-content;
        border-radius: 6px;
        margin: 12px 16px 0 16px;
        .character {
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
        }
      }
    }
  }

  .player-outside-label {
  }
`;

export const PlayerTileFormSizeWrapper = styled.div<{
  size: 'small' | 'medium' | 'large' | 'extraLarge';
}>`
  ${({ size }) =>
    size === 'small'
      ? small
      : size === 'medium'
      ? medium
      : size === 'large'
      ? large
      : extraLarge};
`;
