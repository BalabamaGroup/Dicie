import styled, { css } from "styled-components";
import { homeContentCards } from "../../../common/constants";
import {
  tabletAndBigger,
  tabletAndSmaller,
} from "../../../common/utils/device";

export const HomeContentCards = styled.div<{
  selectedCard: string;
}>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  gap: 64px;

  @media ${tabletAndSmaller} {
    flex-direction: column;
    padding: 32px;
    gap: 32px;
  }

  padding: 64px 0 64px 0;
  @media ${tabletAndSmaller} {
    padding: 0;
  }
`;

const HomeContentCard = styled.div<{
  cardKey: string;
  selectedCard: string;
}>`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  text-align: center;

  .main,
  .sub {
    max-width: 380px;
  }
  .main {
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    white-space: pre-line;
    margin-bottom: 16px;
  }
  .sub {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  ${({ cardKey, selectedCard }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          width: 100%;
          border-radius: 32px;
        `
      : selectedCard === cardKey
      ? css`
          width: 100%;
          @media ${tabletAndSmaller} {
            height: 100%;
          }
        `
      : css`
          @media ${tabletAndBigger} {
            width: 96px;
            min-width: 96px;
          }
          @media ${tabletAndSmaller} {
            height: 96px;
          }
          * {
            display: none;
          }
        `}
`;

export const CreateRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  background-color: #f2f586;
  color: #201e1f;

  border-radius: 0 64px 64px 0;

  @media ${tabletAndSmaller} {
    border-radius: 0 0 64px 64px;
  }

  ${({ cardKey, selectedCard }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 16px 64px rgba(242, 245, 134, 0.75);
          }
        `
      : selectedCard === cardKey
      ? css``
      : css``}
`;

export const JoinRoomCard = styled(HomeContentCard)<{
  selectedCard: string;
  cardKey: string;
}>`
  background-color: #8986f5;
  color: #f7f4fc;
  border-radius: 64px 0 0 64px;

  @media ${tabletAndSmaller} {
    border-radius: 64px 64px 0 0;
  }

  ${({ cardKey, selectedCard }) =>
    selectedCard === homeContentCards.DEFAULT
      ? css`
          &:hover {
            box-shadow: 0px 16px 64px rgba(106, 101, 255, 0.75);
          }
        `
      : selectedCard === cardKey
      ? css``
      : css``}
`;

export const OrLabel = styled.div<{
  selectedCard: string;
}>`
  user-select: none;
  box-sizing: border-box;
  z-index: 2;

  position: absolute;
  position: absolute;
  right: auto;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main {
    font-weight: 600;
    font-size: 48px;
    line-height: 44px;
    border-radius: 32px;
    width: 192px;
    height: 192px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.page.home.cards.orLabel.text};
    background: ${({ theme }) => theme.page.home.cards.orLabel.background};
    border-radius: 50%;

    svg {
      width: 72px;
      height: 72px;
    }
  }

  top: calc(50% - 64px);
  left: calc(50% - 96px);

  @media ${tabletAndSmaller} {
    .main {
      width: 128px;
      height: 128px;
      font-size: 40px;
    }

    top: calc(50% - 32px);
    left: calc(50% - 64px);
  }

  ${({ selectedCard }) =>
    selectedCard === homeContentCards.CREATE_ROOM
      ? css`
          cursor: pointer;
          @media ${tabletAndBigger} {
            left: calc(100% - 128px - 64px - 32px);
            .main svg {
              transform: rotate(90deg);
            }
          }
          @media ${tabletAndSmaller} {
            top: calc(100% - 256px + 64px + 32px);
            .main svg {
              transform: rotate(180deg);
            }
          }
        `
      : selectedCard === homeContentCards.JOIN_ROOM &&
        css`
          cursor: pointer;
          @media ${tabletAndBigger} {
            left: 32px;
            .main svg {
              transform: rotate(-90deg);
            }
          }
          @media ${tabletAndSmaller} {
            top: calc(0% + 64px + 32px);
            .main svg {
              transform: rotate(0deg);
            }
          }
        `};
`;
