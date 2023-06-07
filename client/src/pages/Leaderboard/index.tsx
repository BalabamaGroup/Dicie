import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import UserAPI from '@/api/user';

import { User } from '@/common/types/user';
import { tabletAndSmaller } from '@/common/utils/device';

import NavBar from '@/components/NavBar';
import Scroll from '@/components/Scroll';

export const StyledLeaderboard = styled.div<{}>`
  width: 100vw;
  height: var(--vh100);
  box-sizing: border-box;
`;

export const StyledContent = styled.div<{}>`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  padding-top: 80px;
  @media ${tabletAndSmaller} {
    padding-top: 16px;
  }
  box-sizing: border-box;

  .scroll {
    max-width: 560px;
    height: 0;
    min-height: 100%;
    width: 100%;

    display: flex;
    align-items: start;
    justify-content: center;

    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;

    .scrollcontent {
      height: 100%;
      width: 100%;

      .user {
        padding: 2px 16px;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        justify-content: space-between;

        font-size: 16px;
        .points {
          font-weight: 700;
        }
      }
    }
  }
`;

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useQuery(
    'leaderboardQuery',
    async () => {
      const data = await UserAPI.getLeaderboard();
      setUsers(data);
    },
    {
      refetchInterval: 3 * 60 * 1000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    }
  );

  return (
    <StyledLeaderboard>
      <NavBar />
      <StyledContent>
        <Scroll className='scroll' color='indigo'>
          <div className='scrollcontent'>
            {users.map((user) => (
              <div key={user.id} className='user'>
                <div className='username'>{user.username}</div>
                <div className='points'>{user.points}</div>
              </div>
            ))}
          </div>
        </Scroll>
      </StyledContent>
    </StyledLeaderboard>
  );
};

export default Leaderboard;
