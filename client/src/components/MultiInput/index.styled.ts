import styled from 'styled-components';

export const MultiInput = styled.div<{ isScale: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  border-radius: 16px;

  .label_wrapper {
    margin-top: -1px;
  }
`;
