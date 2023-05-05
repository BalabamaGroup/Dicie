import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import RoomAPI from './api/room';
import routes from './common/constants/routes';
import useUserStore from './stores/UserStore';

export const useUserQuery = () => {
  const fetchUser = useUserStore((s) => s.fetchUser);
  const location = useLocation();
  const isAuthPage =
    location.pathname === routes.SIGN_IN ||
    location.pathname === routes.SIGN_UP;

  return useQuery('userQuery', async () => fetchUser(), {
    enabled: !isAuthPage,
    refetchInterval: 3 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};

export const useRoomsQuery = () => {
  const user = useUserStore((s) => s.user);

  return useQuery('roomsQuery', () => RoomAPI.getRooms(), {
    enabled: !!user?.id,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

const GlobalQueries = () => {
  useUserQuery();
  useRoomsQuery();
  return null;
};

export default GlobalQueries;
