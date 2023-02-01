import styled, { css } from 'styled-components';

export const PlayerWrapper = styled.div<{
  canBeHighlighted: boolean;
  isCurrentUserTurn: boolean;
}>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({ isCurrentUserTurn }) =>
    !isCurrentUserTurn &&
    css`
      cursor: auto;
    `}

  ${({ isCurrentUserTurn, canBeHighlighted }) =>
    isCurrentUserTurn &&
    !canBeHighlighted &&
    css`
      opacity: 0.7;
    `}
`;

export const Player = styled.div<{
  isHighlighted: boolean;
}>`
  height: 144px;
  width: 144px;
  display: flex;
  align-items: flex-end;
  border-radius: 32px;
  background: #ac87f6;

  outline: 4px solid white;
  border: 8px solid white;
  ${({ isHighlighted }) =>
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
