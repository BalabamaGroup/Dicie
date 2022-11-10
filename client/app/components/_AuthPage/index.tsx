import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

import AuthForm from './AuthForm';

import Switch from '@/app/components/Switch';

import * as Styled from './index.styled';

const AuthPage = () => {
  const router = useRouter();
  const authType = router.query.authType === 'signup' ? 'signUp' : 'signIn';

  const theme = useTheme();

  useEffect(() => {
    router.prefetch(
      router.query.authType === 'signup' ? '/auth/signin' : '/auth/signup'
    );
  }, []);

  return (
    <Styled.Auth>
      <Styled.AuthPicture>
        <Image
          layout='fill'
          objectFit='cover'
          src={'/images/svgs/eye.closed.svg'}
          alt='Auth Picture'
        />
      </Styled.AuthPicture>

      <Styled.AuthContent>
        <Switch
          className='auth_switch'
          options={[
            {
              id: 'signup',
              label: 'Sign Up',
              onClick: () => {
                router.push('/auth/signup');
              },
              defaultChoice: authType === 'signUp',
            },
            {
              id: 'signin',
              label: 'Sign In',
              onClick: () => {
                router.push('/auth/signin');
              },
              defaultChoice: authType === 'signIn',
            },
          ]}
        />

        <AuthForm type={authType} />
      </Styled.AuthContent>
    </Styled.Auth>
  );
};

export default AuthPage;
