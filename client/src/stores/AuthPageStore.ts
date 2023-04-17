import { useQuery } from 'react-query';
import { create } from 'zustand';

import AuthAPI from '@/api/auth';

interface AuthPageStoreState {
  username: string;
  email: string;
  password: string;
  matchPassword: string;

  takenUsernames: string[];
  takenEmails: string[];

  usernameIsValid: boolean;
  emailIsValid: boolean;
  passwordIsValid: boolean;
  matchPasswordIsValid: boolean;

  validateUsername: Function;
  validateEmail: Function;
  validatePassword: Function;
  validateMatchPassword: Function;

  usernameErrorNote: string;
  emailErrorNote: string;
  passwordErrorNote: string;
  matchPasswordErrorNote: string;
}

const usernameRegExp = /^[A-z][A-z0-9-_]{3,23}$/;
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const useAuthPageStore = create<AuthPageStoreState>()((set, get) => ({
  username: '',
  email: '',
  password: '',
  matchPassword: '',

  takenUsernames: [],
  takenEmails: [],

  usernameIsValid: true,
  emailIsValid: true,
  passwordIsValid: true,
  matchPasswordIsValid: true,

  usernameErrorNote: '',
  emailErrorNote: '',
  passwordErrorNote: '',
  matchPasswordErrorNote: '',

  validateUsername: () => {
    if (!get().username)
      set((s) => ({ ...s, usernameIsValid: true, usernameErrorNote: '' }));
    else if (!usernameRegExp.test(get().username))
      set((s) => ({
        ...s,
        usernameIsValid: false,
        usernameErrorNote:
          '4 to 24 characters\nMust begin with a letter\nAllowed special characters:  _ -',
      }));
    else if (get().takenUsernames.find((un) => get().username === un))
      set((s) => ({
        ...s,
        usernameIsValid: false,
        usernameErrorNote: 'Username is taken',
      }));
    else set((s) => ({ ...s, usernameIsValid: true, usernameErrorNote: '' }));
  },

  validateEmail: () => {
    if (!get().email)
      set((s) => ({ ...s, emailIsValid: true, emailErrorNote: '' }));
    else if (!emailRegExp.test(get().email))
      set((s) => ({
        ...s,
        emailIsValid: false,
        emailErrorNote: 'Email is not valid',
      }));
    else if (get().takenEmails.find((e) => get().email === e))
      set((s) => ({
        ...s,
        emailIsValid: false,
        emailErrorNote: 'Email is taken',
      }));
    else set((s) => ({ ...s, emailIsValid: true, emailErrorNote: '' }));
  },

  validatePassword: () => {
    if (!get().password)
      set((s) => ({ ...s, passwordIsValid: true, passwordErrorNote: '' }));
    else if (!passwordRegExp.test(get().password))
      set((s) => ({
        ...s,
        passwordIsValid: false,
        passwordErrorNote:
          'Minimum eight characters\nAt least one uppercase letter\none lowercase letter and one number',
      }));
    else set((s) => ({ ...s, passwordIsValid: true, passwordErrorNote: '' }));
  },

  validateMatchPassword: () => {
    if (!get().matchPassword)
      set((s) => ({
        ...s,
        matchPasswordIsValid: true,
        matchPasswordErrorNote: '',
      }));
    else if (get().password !== get().matchPassword)
      set((s) => ({
        ...s,
        matchPasswordIsValid: false,
        matchPasswordErrorNote: 'Must match the first password input field',
      }));
    else
      set((s) => ({
        ...s,
        matchPasswordIsValid: true,
        matchPasswordErrorNote: '',
      }));
  },

  startTakenSignUpInfoQuery: () => {
    takenSignUpInfoQuery();
  },
}));

const takenSignUpInfoQuery = () =>
  useQuery('takenSignUpInfo', async () => {
    const takenSignUpInfo = await AuthAPI.getTakenSignUpInfo();

    const takenUsernames: string[] = [];
    const takenEmails: string[] = [];

    takenSignUpInfo.forEach(
      (signUpInfo: { username: string; email: string }) => {
        takenUsernames.push(signUpInfo.username);
        takenEmails.push(signUpInfo.email);
      }
    );

    useAuthPageStore.setState((s) => ({ ...s, takenUsernames, takenEmails }));
  });

export default useAuthPageStore;
