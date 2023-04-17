import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';
import { commonPageStyles } from '@/styles/commonStyles';

export const HomePageDefaultBackground = styled.section<{}>`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.page.home.defaultBackground};
`;
export const HomePage = styled.section<{
  selectedCard: string | undefined;
}>`
  ${commonPageStyles}

  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.page.text};

  transition: background 0.3s ease-in-out;
  background: ${({ selectedCard, theme }) =>
    selectedCard === 'createRoom'
      ? theme.page.home.createRoomBackground
      : selectedCard === 'joinRoom'
      ? theme.page.home.joinRoomBackground
      : 'transparent'};
`;

export const HomeContent = styled.div`
  height: 100vh;
  padding-top: 64px;
  @media ${tabletAndSmaller} {
    padding-top: 0;
  }
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
