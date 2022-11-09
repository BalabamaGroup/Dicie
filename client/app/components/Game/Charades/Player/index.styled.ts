import styled, { css } from "styled-components";

export const Player = styled.div<{
  isTakingATurn: boolean;
  isAvailableForSelection: boolean;
  canBeSelected: boolean;
  isSelected: boolean;
  stage: "playerPicking" | "main";
}>`
  width: 200px;
  margin: 20px;
  padding: 5px 20px;

  border: 4px solid transparent;
  ${({ isTakingATurn }) =>
    isTakingATurn &&
    css`
      border: 4px solid blue;
    `}

  ${({ isAvailableForSelection, canBeSelected }) =>
    canBeSelected
      ? isAvailableForSelection
        ? css`
            background-color: green;
          `
        : css`
            background-color: red;
          `
      : css`
          background-color: beige;
        `}


    ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: violet;
    `}

  ${({ stage }) =>
    stage !== "playerPicking" &&
    css`
      background-color: white;
    `}
`;

export const CurrentUserPlayer = styled.div<{}>`
  background: grey;
  padding: 10px;
  text-align: center;
  font-size: 16px;
`;
