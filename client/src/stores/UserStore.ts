import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import UserAPI from '@/api/user';
import routes from '@/common/constants/routes';
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
  isLoading: true,

  setUser: (user: User) => {
    set((s) => ({ ...s, user: user }));
  },

  fetchUser: async () => {
    console.log('Getting USER');
    if (!get().user) set((s) => ({ ...s, isLoading: true }));
    UserAPI.getCurrentUser()
      .then((data) => {
        set((s) => ({ ...s, user: data, isLoading: false }));
      })
      .catch((err) => {
        set((s) => ({ ...s, user: null, isLoading: false }));
        if (
          err.response.status === 401 &&
          window.location.pathname !== routes.SIGN_IN
        )
          window.location.href = routes.SIGN_IN;
      });
  },

  queryFetchUser: () => {
    useQuery(
      'globalAutoFetchUser',
      async () => {
        get().fetchUser();
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
