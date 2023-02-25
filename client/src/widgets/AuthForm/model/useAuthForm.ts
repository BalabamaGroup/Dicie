import { create } from 'zustand';

interface AuthForm {
  username: string;
  email: string;
  password: string;
  matchPassword: string;

  onChangeUsername: any;
  onChangeEmail: any;
  onChangePassword: any;
  onChangeMatchPassword: any;
}

export const useAuthForm = create<AuthForm>((set, get) => ({
  username: '',
  email: '',
  password: '',
  matchPassword: '',

  onChangeUsername: (e: any) => {
    set(() => ({ username: e.target.value }));
  },

  onChangeEmail: (e: any) => {
    set(() => ({ email: e.target.value }));
  },

  onChangePassword: (e: any) => {
    set(() => ({ password: e.target.value }));
  },

  onChangeMatchPassword: (e: any) => {
    set(() => ({ matchPassword: e.target.value }));
  },
}));
