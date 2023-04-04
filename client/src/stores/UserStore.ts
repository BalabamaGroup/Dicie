import { useQuery } from 'react-query';
import { create } from 'zustand';

import User from '@/common/types/user';

import UserAPI from '../api/user/index';

interface UserStoreState {
  user: User | null;
  isLoading: boolean;
  setUser: Function;
  fetchUser: Function;
  queryFetchUser: Function;
}

export const useUserStore = create<UserStoreState>()((set, get) => ({
  user: null,
  isLoading: false,

  setUser: (user: User) => {
    set((s) => ({ ...s, user: user }));
  },

  removeUser: () => {
    set((s) => ({ ...s, user: null }));
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
