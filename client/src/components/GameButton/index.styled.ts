import styled from 'styled-components';

export const GameButton = styled.div<{}>`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 16px;
  font-size: 12px;
  font-weight: 600;
  svg {
    * {
      cursor: pointer;
    }
  }
`;
