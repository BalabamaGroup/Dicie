import styled, { css } from "styled-components";

export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const SwitchOption = styled.div<{ isChosen: boolean | undefined }>`
  padding: 8px 16px 0;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  .higlighting {
    bottom: 0;
    width: 24px;
    height: 2px;

    border-radius: 2px;
    display: inline-block;
  }

  transition: all 0.2s ease-in-out;
  ${({ isChosen }) =>
    !isChosen
      ? css`
          cursor: pointer;
          color: #222222;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 2px 4px rgba(137, 134, 245, 0.125);

          .higlighting {
            background-color: #ffffff;
          }
        `
      : css`
          color: #696cf9;

          .higlighting {
            background-color: #696cf9;
            transition: all 0.2s ease-in-out;
          }
        `}
`;
