import styled, { css } from 'styled-components';

export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  /* height: 36px; */
`;

export const SwitchOption = styled.div<{ isChosen: boolean | undefined }>`
  position: relative;
  padding: 8px 16px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;

  .higlighting {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    border-radius: 2px;
    display: inline-block;
    transition: width 0.1s ease-in-out, background 0.15s ease-in-out;
  }

  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  ${({ isChosen }) =>
    !isChosen
      ? css`
          cursor: pointer;
          color: ${({ theme }) => theme.textOff};
          background: ${({ theme }) => theme.backgroundOff};
          &:hover {
            box-shadow: ${({ theme }) => theme.shadow};
            .higlighting {
              background-color: ${({ theme }) => theme.textOn};
              width: 24px;
            }
          }
        `
      : css`
          background: ${({ theme }) => theme.backgroundOn};
          color: ${({ theme }) => theme.textOn};
        `};
`;
