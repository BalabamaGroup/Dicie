import styled, { css } from 'styled-components';

export const RadioOption = styled.div<{}>`
  width: 12px;
  height: 12px;
  padding: 2px;
  box-sizing: border-box;
  background: #181621;
  border-radius: 6px;
`;

export const Indicator = styled.div<{
  isSelected: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: 6px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #8986f5;
    `}
`;
