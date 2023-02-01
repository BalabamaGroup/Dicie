import React, { useState } from 'react';

import useAuth from '@/shared/hooks/useAuth';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import MultiInput from '@/shared/ui/MultiInput';

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
            id={'signUp-username'}
            key={'signUp-username'}
            size='large'
            placeholder='Username'
            value={username.value}
            onChange={username.onChange}
          />
          <Input
            id={'signUp-username'}
            key={'signUp-passsword'}
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

      <Button isPrimary isScale onClick={onSignIn} size='large'>
        Sign In
      </Button>
    </Styled.AuthForm>
  );
};

export default SignInForm;
