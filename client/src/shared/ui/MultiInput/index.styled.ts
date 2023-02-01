import styled from 'styled-components';

export const MultiInput = styled.div<{ isScale: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isScale }) => (isScale ? '100%' : 'auto')};

  .label_wrapper:first-child {
    padding-top: 0;
    .input_input-wrapper {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  }

  .label_wrapper:last-child {
    padding-bottom: 0;
    .input_input-wrapper {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
`;
