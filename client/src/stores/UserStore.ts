import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import UserAPI from '@/api/user';
import routes from '@/common/constants/routes';
import { User } from '@/common/types/user';

interface UserStoreState {
  user: User | null;
  isLoading: boolean;
  fetchUser: Function;
  queryFetchUser: Function;
}

const useUserStore = create<UserStoreState>()((set, get) => ({
  user: null,
  isLoading: true,

  fetchUser: async () => {
    if (!get().user) set((s) => ({ ...s, isLoading: true }));
    UserAPI.getCurrentUser()
      .then((data) => {
        set((s) => ({ ...s, user: data, isLoading: false }));
      })
      .catch((err) => {
        set((s) => ({ ...s, user: null, isLoading: false }));
        const isAuthErr = err.response.status === 401;
        const path = window.location.pathname;
        const isAuthPage = path === routes.SIGN_IN || path === routes.SIGN_UP;
        if (isAuthErr && !isAuthPage) window.location.href = routes.SIGN_IN;
        sessionStorage.removeItem('token');
      })
      .finally(() => {
        set((s) => ({ ...s, isLoading: false }));
      });
  },

  queryFetchUser: () => {
    useQuery('globalAutoFetchUser', async () => get().fetchUser(), {
      refetchInterval: 180000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    });
  },
}));

export default useUserStore;
