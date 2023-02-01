import { useQuery } from 'react-query';

import UserAPI from '@/shared/api/user';
import User from '@/shared/types/user';

const useCurrentUser = () => {
  const { data, error, isLoading, refetch } = useQuery(
    'currentRoom',
    async () => {
      const currUser: User = await UserAPI.getCurrentUser();
      return currUser;
    }
  );

  return { data, error, isLoading, refetch };
};

export default useCurrentUser;
