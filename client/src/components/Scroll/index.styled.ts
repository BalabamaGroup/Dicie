import styled, { css } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';

export const Scroll = styled.div<{
  align: 'left' | 'center' | 'right';
}>`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.scrollBackground};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.thumbBackground};
  }
`;
