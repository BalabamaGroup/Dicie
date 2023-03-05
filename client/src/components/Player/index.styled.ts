import styled, { css } from 'styled-components';

export const PlayerWrapper = styled.div<{
  isClickable: boolean;
  isDisabled: boolean;
}>`
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ isClickable, isDisabled }) =>
    isClickable &&
    !isDisabled &&
    css`
      cursor: pointer;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
    `}
`;

export const Player = styled.div<{
  size: 'small' | 'medium' | 'large';
  canBeHighlighted: boolean;
  isHighlighted: boolean;
}>`
  ${({ size }) =>
    size === 'small'
      ? css`
          height: 32px;
          width: 32px;
          border-radius: 8px;
        `
      : size === 'medium'
      ? css`
          height: 96px;
          width: 96px;
          border-radius: 16px;
        `
      : css`
          height: 144px;
          width: 144px;
          border-radius: 32px;
        `};

  display: flex;
  align-items: flex-end;
  /* background: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`}; */
  background: #87b3f6;

  ${({ canBeHighlighted }) =>
    canBeHighlighted &&
    css`
      outline: 4px solid white;
      border: 8px solid white;
    `}

  ${({ canBeHighlighted, isHighlighted }) =>
    canBeHighlighted &&
    isHighlighted &&
    css`
      outline: 4px solid #af87f6;
    `}
`;

export const PlayerLabel = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  background: #23272b;
  max-width: 100%;
  padding: 4px;
  box-sizing: border-box;

  .character {
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  ${({ size }) =>
    size === 'small'
      ? css`
          display: none;
          border-radius: 2px 2px 8px 8px;
        `
      : size === 'medium'
      ? css`
          height: 36px;
          border-radius: 4px 4px 16px 16px;
          font-size: 12px;
          line-height: 12px;
        `
      : css`
          height: 72px;
          border-radius: 8px 8px 24px 24px;
        `};
`;

export const PlayerOutsideLabel = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  font-weight: 600;

  .username {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ size }) =>
    size === 'small'
      ? css`
          display: none;
          font-size: 16px;
          line-height: 19px;
        `
      : size === 'medium'
      ? css`
          margin-top: 8px;
          font-size: 10px;
          line-height: 10px;
        `
      : css`
          margin-top: 12px;
          font-size: 16px;
          line-height: 19px;
        `};
`;
