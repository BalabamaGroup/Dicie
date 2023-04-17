import styled, { css } from 'styled-components';

import { HomeContentCard } from '../index.styled';

export const JoinRoomCard = styled(HomeContentCard)<{
  isSelected: boolean;
  isDefault: boolean;
}>`
  position: relative;
  color: ${({ theme }) => theme.page.home.joinRoomCard.text};
  border: 2px solid ${({ theme }) => theme.page.home.joinRoomCard.border};

  transition: background 0.3s ease-in-out;
  background: ${({ isDefault, isSelected, theme }) =>
    isDefault
      ? theme.page.home.joinRoomCard.notSelectedBackground
      : !isSelected
      ? theme.page.home.joinRoomCard.background
      : theme.page.home.joinRoomCard.background};

  ${({ isDefault }) =>
    isDefault &&
    css`
      &:hover {
        box-shadow: 0px 0px 256px rgba(106, 101, 255, 0.75);
      }
    `}

  ${({ isSelected }) =>
    isSelected
      ? css`
          pointer-events: none;
          & * {
            pointer-events: all;
          }
        `
      : css`
          pointer-events: all;
          & * {
            pointer-events: none;
          }
        `};

  .notselected-arrow {
    margin-left: 48px;
    position: absolute;
    left: 0;
    svg {
      path {
        fill: #8986f5;
      }
    }
  }
`;
