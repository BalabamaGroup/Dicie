import { useQuery } from 'react-query';
import { create } from 'zustand';

import UserAPI from '@/api/user';
import { User } from '@/common/types/user';

interface UserStoreState {
  user: User | null;
  isLoading: boolean;
  setUser: Function;
  fetchUser: Function;
  queryFetchUser: Function;
}

const useUserStore = create<UserStoreState>()((set, get) => ({
  user: null,
  isLoading: false,

  setUser: (user: User) => {
    set((s) => ({ ...s, user: user }));
  },

  fetchUser: async () => {
    if (!get().user) set((s) => ({ ...s, isLoading: true }));

    const fetchedUser: User = await UserAPI.getCurrentUser();
    if (!fetchedUser.id) return;

    set((s) => ({ ...s, user: fetchedUser, isLoading: false }));
    console.log(fetchedUser);
  },

  queryFetchUser: () => {
    useQuery(
      'globalAutoFetchUser',
      async () => {
        if (sessionStorage.getItem('token')) get().fetchUser();
      },
      {
        refetchInterval: 60000,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
      }
    );
  },
}));

export default useUserStore;
