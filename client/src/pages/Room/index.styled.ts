import { commonPageWithNavbarStyles } from '@/styles/commonStyles';
import styled from 'styled-components';

export const RoomPage = styled.section`
  ${commonPageWithNavbarStyles}

  background : ${({ theme }) => theme.page.background};
  color: ${({ theme }) => theme.page.color};
`;
