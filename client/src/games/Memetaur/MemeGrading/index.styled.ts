import styled from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

export const MemeGrading = styled.div<{}>`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .meme-grading-scroll {
    height: 0;
    min-height: 100%;
    width: 100%;

    display: flex;
    align-items: start;
    justify-content: center;

    .memes {
      margin-top: auto;
      margin-bottom: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      gap: 16px;

      @media ${mobileAndSmaller} {
        grid-template-columns: 1fr;
      }
    }
  }
`;
