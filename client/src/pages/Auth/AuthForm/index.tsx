import { useState } from 'react';

import { useAuthForm } from '@/widgets/AuthForm/model/useAuthForm';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface AuthFormProps {
  type: 'signUp' | 'signIn';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const username = useAuthForm((state) => state.username);
  const email = useAuthForm((state) => state.email);
  const password = useAuthForm((state) => state.password);
  const matchPassword = useAuthForm((state) => state.matchPassword);

  const setUsername = useAuthForm((state) => state.setUsername);
  const setEmail = useAuthForm((state) => state.setEmail);
  const setPassword = useAuthForm((state) => state.setPassword);
  const setMatchPassword = useAuthForm((state) => state.setMatchPassword);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onChangeMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMatchPassword(e.target.value);

  switch (type) {
    case 'signUp':
      return (
        <SignUpForm
          username={{ value: username, onChange: onChangeUsername }}
          email={{ value: email, onChange: onChangeEmail }}
          password={{ value: password, onChange: onChangePassword }}
          matchPassword={{
            value: matchPassword,
            onChange: onChangeMatchPassword,
          }}
        />
      );
    case 'signIn':
      return (
        <SignInForm
          username={{ value: username, onChange: onChangeUsername }}
          password={{ value: password, onChange: onChangePassword }}
        />
      );
  }
};

export default AuthForm;
