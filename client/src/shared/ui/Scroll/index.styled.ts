import styled, { css } from 'styled-components';

export const Scroll = styled.div<{
  align: 'left' | 'center' | 'right';
}>`
  overflow-y: auto;
  overflow-x: hidden;
  padding-left: 6px;
  margin: 0 -6px;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: -6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #9b89f0;
  }
`;
