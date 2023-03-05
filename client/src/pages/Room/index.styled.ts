import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';
import { commonPageStyles } from '@/styles/commonStyles';

export const RoomPage = styled.section`
  ${commonPageStyles}

  width: 100vw;
  color: ${({ theme }) => theme.page.text};

  /* background: ${({ theme }) => theme.page.background.value}; */
  background: linear-gradient(178.62deg, #8986f5 0%, #be86f5 100%);
  color: ${({ theme }) => theme.page.text};
`;

export const RoomLoadedContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  height: calc(100vh - 64px);
  @media ${tabletAndSmaller} {
    height: 100vh;
  }
`;
