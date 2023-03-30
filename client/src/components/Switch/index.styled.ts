import styled, { css } from 'styled-components';

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
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;

  .higlighting {
    bottom: 0;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    display: inline-block;
    transition: background 0.3s ease-in-out;
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
          }
          .higlighting {
            background-color: none;
          }
        `
      : css`
          background: ${({ theme }) => theme.backgroundOn};
          color: ${({ theme }) => theme.textOn};
          .higlighting {
            background-color: ${({ theme }) => theme.textOn};
          }
        `};
`;
