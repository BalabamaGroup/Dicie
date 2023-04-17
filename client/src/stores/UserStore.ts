import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import AuthAPI from '@/api/auth';
import UserAPI from '@/api/user';
import routes from '@/common/constants/routes';
import { User } from '@/common/types/user';

interface UserStoreState {
  user: User | null;
  isLoading: boolean;
  fetchUser: Function;
  queryFetchUser: Function;

  signIn: Function;
  signUp: Function;
}

const useUserStore = create<UserStoreState>()((set, get) => ({
  user: null,
  isLoading: true,

  signIn: async (data: { username: string; password: string }) => {
    AuthAPI.signIn(data).then((res) => {
      set((s) => ({ ...s, user: res, isLoading: false }));
      res.token && sessionStorage.setItem('token', res.token);
    });
  },

  signUp: async (data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }) => {
    await AuthAPI.signUp(data);
    await get().signIn({
      username: data.username,
      password: data.password,
    });
  },

  signOut: () => {
    set((s) => ({ ...s, user: null }));
    sessionStorage.removeItem('token');
  },

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
