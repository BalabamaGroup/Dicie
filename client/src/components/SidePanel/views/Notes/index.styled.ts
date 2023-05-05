import styled from 'styled-components';

export const NotesWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  #notes {
    all: unset;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 12px;
    resize: none;
    overflow-x: hidden;
    /* word-break: break-all; */
    white-space: pre-wrap;

    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};

    transition: border 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.border};
    &:hover {
      border: 1px solid ${({ theme }) => theme.borderHover};
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.borderActive};
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
      margin: 16px 0;
      background-color: ${({ theme }) => theme.scroll.background};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.scroll.thumb};
    }
  }
`;
