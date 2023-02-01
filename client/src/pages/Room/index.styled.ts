import styled from 'styled-components';

export const RoomPage = styled.section`
  /* ${commonPageStyles} */

  background: ${({ theme }) => theme.page.background.value};
  color: ${({ theme }) => theme.page.text};
`;

export const RoomLoadedContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
