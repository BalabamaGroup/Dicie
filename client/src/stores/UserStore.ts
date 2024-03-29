import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import AuthAPI from '@/api/auth';
import UserAPI from '@/api/user';
import routes from '@/common/constants/routes';
import { User } from '@/common/types/user';
import Toast from '@/components/Toast';

interface UserStoreState {
  user: User | null;
  isInitialLoaded: boolean;
  isLoading: boolean;
  fetchUser: Function;

  signIn: { (data: { username: string; password: string }): Promise<void> };
  signUp: {
    (data: {
      username: string;
      email: string;
      password: string;
      role: string;
    }): Promise<void>;
  };
  signOut: { (): void };
}

const useUserStore = create<UserStoreState>()((set, get) => ({
  user: null,
  isInitialLoaded: false,
  isLoading: false,

  signIn: async (data: { username: string; password: string }) => {
    await AuthAPI.signIn(data)
      .then((res) => {
        set((s) => ({ ...s, user: res }));
        res.token && sessionStorage.setItem('token', res.token);
      })
      .finally(() => {
        set((s) => ({ ...s, isLoading: false, isInitialLoaded: true }));
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
        set((s) => ({ ...s, user: data }));
      })
      .catch((err) => {
        set((s) => ({ ...s, user: null }));
        const isAuthErr = err.response.status === 401;
        const path = window.location.pathname;
        const isAuthPage = path === routes.SIGN_IN || path === routes.SIGN_UP;
        if (isAuthErr && !isAuthPage) window.location.href = routes.SIGN_IN;
        sessionStorage.removeItem('token');
      })
      .finally(() => {
        set((s) => ({ ...s, isLoading: false, isInitialLoaded: true }));
      });
  },
}));

export default useUserStore;
