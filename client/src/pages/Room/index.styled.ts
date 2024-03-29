import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';
import {
  commonPageStyles,
  commonPageWithNavbarStyles,
} from '@/styles/commonStyles';

export const RoomPage = styled.section`
  width: 100vw;
  height: var(--vh100);

  /* background: ${({ theme }) => theme.page.background.value}; */
`;

export const RoomContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const GamePage = styled.div`
  width: 100vw;
  height: var(--vh100);
`;

export const GameContent = styled.div`
  height: var(--vh100);
  box-sizing: border-box;
`;
