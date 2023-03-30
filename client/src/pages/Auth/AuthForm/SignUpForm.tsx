import eyeClosed from '/images/svgs/eye.closed.svg';
import eyeOpened from '/images/svgs/eye.opened.svg';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { RoleTypes } from '@/common/constants';
import {
  getEmailValidationData,
  getMatchPasswordValidationData,
  getPasswordValidationData,
  getUsernameValidationData,
} from '@/common/utils/validation';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiInput from '@/components/MultiInput';
import useAuth from '@/hooks/useAuth';
import { useThemeStore } from '@/stores/ThemeStore';

import * as Styled from './index.styled';

interface signUpProps {
  username: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  email: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  password: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  matchPassword: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
}

const SignUpForm = ({
  username,
  email,
  password,
  matchPassword,
}: signUpProps) => {
  const { signUp, getTakenSignUpInfo } = useAuth();

  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [matchPasswordIsValid, setMatchPasswordIsValid] = useState(true);

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const togglePasswordIsvisible = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const [matchPasswordIsVisible, setMatchPasswordIsVisible] = useState(false);
  const toggleMatchPasswordIsvisible = () =>
    setMatchPasswordIsVisible(!matchPasswordIsVisible);

  const [takenUsernames, setTakenUsernames] = useState<string[]>([]);
  const [takenEmails, setTakenEmails] = useState<string[]>([]);

  const userameValidationData = getUsernameValidationData();
  const emailValidationData = getEmailValidationData();
  const passwordValidationData = getPasswordValidationData();
  const matchPasswordValidationData = getMatchPasswordValidationData();

  const onSignUp = async (e: any) => {
    e.preventDefault();
    signUp({
      username: username.value,
      password: password.value,
      email: email.value,
      role: RoleTypes.USER,
    });
  };

  useQuery('takenSignUpInfo', async () => {
    const takenSignUpInfo = await getTakenSignUpInfo();

    const usernames: string[] = [];
    const emails: string[] = [];

    takenSignUpInfo.forEach(
      (signUpInfo: { username: string; email: string }) => {
        usernames.push(signUpInfo.username);
        emails.push(signUpInfo.email);
      }
    );

    setTakenUsernames(usernames);
    setTakenEmails(emails);
  });

  const eyeClosedSvg = eyeClosed;
  const eyeOpenedSvg = eyeOpened;

  const theme = useThemeStore((state) => state.theme);
  const defaultColor = theme === 'light' ? 'indigo' : 'lime';

  return (
    <Styled.AuthForm>
      <Styled.AuthHeader>
        <div className='main'>
          Welcome to <span className='colored'>Dicie</span>
        </div>
        <div className='subheader'>Become the true embodiment of darkness</div>
        <div className='subheader'>( and there are also some party games )</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={4}>
        <MultiInput className='auth_multiinput' isScale={true}>
          <Input
            isVibrant
            id={'signUp-username'}
            key={'signUp-username'}
            size='large'
            color='indigo'
            placeholder='Username'
            value={username.value}
            onChange={username.onChange}
            isValid={usernameIsValid}
            setIsValid={setUsernameIsValid}
            validationData={{
              ...userameValidationData.validation,
            }}
            existanceData={{
              values: takenUsernames,
              ...userameValidationData.existance,
            }}
          />

          <Input
            isVibrant
            id={'signUp-email'}
            key={'signUp-email'}
            size='large'
            color='indigo'
            type={'email'}
            placeholder='Email'
            value={email.value}
            onChange={email.onChange}
            isValid={emailIsValid}
            setIsValid={setEmailIsValid}
            validationData={{
              ...emailValidationData.validation,
            }}
            existanceData={{
              values: takenEmails,
              ...emailValidationData.existance,
            }}
          />

          <Input
            isVibrant
            id={'signUp-password'}
            key={'signUp-passsword'}
            size='large'
            color='indigo'
            type={passwordIsVisible ? 'text' : 'password'}
            placeholder='Password'
            value={password.value}
            onChange={password.onChange}
            iconData={{
              iconSrc: passwordIsVisible ? eyeClosedSvg : eyeOpenedSvg,
              onClick: togglePasswordIsvisible,
            }}
            isValid={passwordIsValid}
            setIsValid={setPasswordIsValid}
            validationData={{
              ...passwordValidationData.validation,
            }}
          />

          <Input
            isVibrant
            id={'signUp-passsword-repeat'}
            key={'signUp-passsword-repeat'}
            size='large'
            color='indigo'
            type={matchPasswordIsVisible ? 'text' : 'password'}
            placeholder='Repeat password'
            value={matchPassword.value}
            onChange={matchPassword.onChange}
            iconData={{
              iconSrc: matchPasswordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg',
              onClick: toggleMatchPasswordIsvisible,
            }}
            isValid={matchPasswordIsValid}
            setIsValid={setMatchPasswordIsValid}
            customTest={{
              test: () => password.value === matchPassword.value,
              ...matchPasswordValidationData.custom,
            }}
            customDependancies={[password.value]}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button
        color='indigo'
        isPrimary
        isScale={true}
        onClick={onSignUp}
        size='large'
        // isDisabled={
        //   !usernameIsValid ||
        //   !passwordIsValid ||
        //   !matchPasswordIsValid ||
        //   !emailIsValid
        // }
      >
        Sign Up
      </Button>
    </Styled.AuthForm>
  );
};

export default SignUpForm;
