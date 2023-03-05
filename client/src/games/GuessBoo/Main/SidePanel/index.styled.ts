import styled from 'styled-components';

export const SidePanelWrapper = styled.div<{}>`
  width: 400px;
  min-width: 400px;
  height: 100%;
  box-sizing: border-box;
`;

export const SidePanel = styled.div<{}>`
  height: 100%;
  width: 100%;

  background: #eceefe;
  border-radius: 32px;
`;

export const SidePanelHeader = styled.div<{}>`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px 32px 8px 8px;
`;
