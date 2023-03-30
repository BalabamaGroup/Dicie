import React, { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiInput from '@/components/MultiInput';
import useAuth from '@/hooks/useAuth';
import { useThemeStore } from '@/stores/ThemeStore';

import * as Styled from './index.styled';

interface signInProps {
  username: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  password: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

const SignInForm = ({ username, password }: signInProps) => {
  const { signIn } = useAuth();

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const togglePasswordIsvisible = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const theme = useThemeStore((state) => state.theme);
  const defaultColor = theme === 'light' ? 'indigo' : 'lime';

  const onSignIn = async (e: any) => {
    e.preventDefault();
    signIn({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <Styled.AuthForm>
      <Styled.AuthHeader>
        <div className='main'>Welcome back</div>
        <div className='subheader'>You’ve been missed!</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={2}>
        <MultiInput className='auth_multiinput' isScale={true}>
          <Input
            isVibrant
            id={'signUp-username'}
            key={'signUp-username'}
            color='indigo'
            size='large'
            placeholder='Username'
            value={username.value}
            onChange={username.onChange}
          />
          <Input
            isVibrant
            id={'signUp-username'}
            key={'signUp-passsword'}
            color='indigo'
            size='large'
            placeholder='Password'
            type={passwordIsVisible ? 'text' : 'password'}
            iconData={{
              iconSrc: passwordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg',
              onClick: togglePasswordIsvisible,
            }}
            value={password.value}
            onChange={password.onChange}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button color='indigo' isPrimary isScale onClick={onSignIn} size='large'>
        Sign In
      </Button>
    </Styled.AuthForm>
  );
};

export default SignInForm;
