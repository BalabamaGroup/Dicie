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
  gap: 12px;

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
  canBeHighlighted: boolean;
  isHighlighted: boolean;
}>`
  height: 144px;
  width: 144px;
  display: flex;
  align-items: flex-end;
  border-radius: 32px;
  background: #ac87f6;

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

export const PlayerCharacter = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 100%;
  border-radius: 0 0 24px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  background: #23272b;
  max-width: 100%;

  .character {
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PlayerUsername = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  .username {
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
