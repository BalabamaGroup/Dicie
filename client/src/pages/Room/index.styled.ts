import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';
import {
  commonPageStyles,
  commonPageWithNavbarStyles,
} from '@/styles/commonStyles';

export const RoomPage = styled.section`
  ${commonPageWithNavbarStyles}

  width: 100vw;
  color: ${({ theme }) => theme.page.text};

  background: ${({ theme }) => theme.page.background.value};
  color: ${({ theme }) => theme.page.text};
`;

export const RoomContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const GamePage = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const GameContent = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;
