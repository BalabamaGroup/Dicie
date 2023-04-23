import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

import { RoomRow } from './index.styled';

const StyledRoomRowLoader = styled(RoomRow)`
  width: 100%;
  height: 64px;

  .content-loader {
    display: flex;
    width: 100%;
    height: 64px;
    gap: 24px;
    align-items: center;
    justify-content: space-between;

    .game-icon {
    }
    .room-name {
    }
    .loader-button {
      margin-left: auto;
    }
  }
`;

const RoomsTableLoader = () =>
  [...Array(10).keys()].map((i) => (
    <StyledRoomRowLoader>
      <ContentLoader
        className='content-loader'
        speed={2}
        width={340}
        height={84}
        viewBox='0 0 340 84'
        backgroundColor='#b14e4e'
        foregroundColor='#ffadad'
      >
        <rect
          className='game-icon'
          x='0'
          y='0'
          rx='3'
          ry='3'
          width='48'
          height='48'
        />
        <rect
          className='room-name'
          x='0'
          y='0'
          rx='3'
          ry='3'
          width='120'
          height='20'
        />
        <rect
          className='loader-button'
          x='0'
          y='0'
          rx='3'
          ry='3'
          width='60'
          height='32'
        />
      </ContentLoader>
    </StyledRoomRowLoader>
  ));

export default RoomsTableLoader;
