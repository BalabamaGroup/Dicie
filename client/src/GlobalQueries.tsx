import { useQuery } from 'react-query';

import RoomAPI from './api/room';
import useUserStore from './stores/UserStore';

export const useUserQuery = () => {
  const fetchUser = useUserStore((s) => s.fetchUser);
  return useQuery('userQuery', async () => fetchUser(), {
    refetchInterval: 180000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};

export const useRoomsQuery = () =>
  useQuery('roomsQuery', async () => RoomAPI.getRooms());

const GlobalQueries = () => {
  useUserQuery();
  useRoomsQuery();

  return null;
};

export default GlobalQueries;
