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
  }

  ${({ isChosen }) =>
    !isChosen
      ? css`
          cursor: pointer;
          color: ${({ theme }) => theme.switch.text};
          background: ${({ theme }) => theme.switch.background};

          &:hover {
            box-shadow: ${({ theme }) => theme.switch.shadow};
          }

          .higlighting {
            background-color: none;
          }
        `
      : css`
          background: ${({ theme }) => theme.switch.isChosen.background};
          color: ${({ theme }) => theme.switch.isChosen.text};

          .higlighting {
            background-color: ${({ theme }) =>
              theme.switch.isChosen.highlighting};
          }
        `}
`;
