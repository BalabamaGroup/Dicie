import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const MyTurn = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  .header {
    margin: 32px 16px 0 16px;
    .main {
      font-weight: 800;
      font-size: 28px;
      line-height: 28px;
      text-align: center;
      margin-bottom: 16px;
      color: ${({ theme }) =>
        theme.memetaurGame.game.captionSetup.myTurn.header.textMain};
    }
    .sub {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
      color: ${({ theme }) =>
        theme.memetaurGame.game.captionSetup.myTurn.header.textSub};
    }
  }
`;

export const Form = styled.div<{}>`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 540px;

  .custom-preset-input {
    width: 100%;
  }
  button {
    max-width: 320px;
  }
`;

export const CaptionPresets = styled.div<{}>`
  margin-top: auto;
  box-sizing: border-box;
  max-width: 600px;
  max-height: 320px;
  height: 100%;

  margin-bottom: -17px;
  border-radius: 16px 16px 0 0;

  background-color: ${({ theme }) =>
    theme.memetaurGame.game.captionSetup.myTurn.presets.background};
  border: 1px solid
    ${({ theme }) => theme.memetaurGame.game.captionSetup.myTurn.presets.border};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  .presets-scroll {
    max-height: 100%;
    margin: 8px 4px 8px 4px;
  }

  .preset {
    cursor: pointer;
    width: 100%;
    height: 64px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    word-break: normal;
    border-radius: 12px;
    background-color: ${({ theme }) =>
      theme.memetaurGame.game.captionSetup.myTurn.presets.preset.background};

    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: ${({ theme }) =>
        theme.memetaurGame.game.captionSetup.myTurn.presets.preset
          .backgroundHover};
    }

    .preset-caption {
      height: auto;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) =>
        theme.memetaurGame.game.captionSetup.myTurn.presets.preset.text};
    }
  }

  @media ${tabletAndSmaller} {
    max-height: 30%;
    margin-right: -9px;
    margin-left: -9px;
    margin-bottom: -9px;
    border-radius: 16px 16px 24px 24px;

    .presets-scroll {
      margin: 8px 16px 8px 8px;
    }

    .preset {
      padding: 8px 8px 8px 8px;
    }
  }
`;
