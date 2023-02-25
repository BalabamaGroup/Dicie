import { useState } from 'react';
import { useQuery } from 'react-query';

import { RoleTypes } from '@/shared/constants';
import useAuth from '@/shared/hooks/useAuth';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import MultiInput from '@/shared/ui/MultiInput';
import { useAuthForm } from '@/widgets/AuthForm/model/useAuthForm';

import {
    getEmailValidationData, getMatchPasswordValidationData, getPasswordValidationData,
    getUsernameValidationData
} from '../lib/validation';
import * as Styled from './index.styled';

interface signUpProps {}

const SignUpForm = ({}: signUpProps) => {
  const { signUp, getTakenSignUpInfo } = useAuth();

  const username = useAuthForm((state) => state.username);
  const email = useAuthForm((state) => state.email);
  const password = useAuthForm((state) => state.password);
  const matchPassword = useAuthForm((state) => state.matchPassword);

  const onChangeUsername = useAuthForm((state) => state.onChangeUsername);
  const onChangeEmail = useAuthForm((state) => state.onChangeEmail);
  const onChangePassword = useAuthForm((state) => state.onChangePassword);
  const onChangeMatchPassword = useAuthForm(
    (state) => state.onChangeMatchPassword
  );

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
      username: username,
      password: password,
      email: email,
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

  return (
    <Styled.AuthForm>
      <Styled.AuthHeader>
        <div className='main'>
          Welcome to <span className='colored'>Dicie</span>
        </div>
        <div className='subheader'>Become the true embodiment of darkness</div>
        <div className='subheader'>And there are also party games</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={4}>
        <MultiInput className='auth_multiinput' isScale={true}>
          <Input
            id={'signUp-username'}
            key={'signUp-username'}
            size='large'
            placeholder='Username'
            value={username}
            onChange={onChangeUsername}
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
            id={'signUp-email'}
            key={'signUp-email'}
            size='large'
            type={'email'}
            placeholder='Email'
            value={email}
            onChange={onChangeEmail}
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
            id={'signUp-username'}
            key={'signUp-passsword'}
            size='large'
            type={passwordIsVisible ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={onChangePassword}
            iconData={{
              iconSrc: passwordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg',
              onClick: togglePasswordIsvisible,
            }}
            isValid={passwordIsValid}
            setIsValid={setPasswordIsValid}
            validationData={{
              ...passwordValidationData.validation,
            }}
          />

          <Input
            id={'signUp-email'}
            key={'signUp-passsword-repeat'}
            size='large'
            type={matchPasswordIsVisible ? 'text' : 'password'}
            placeholder='Repeat password'
            value={matchPassword}
            onChange={onChangeMatchPassword}
            iconData={{
              iconSrc: matchPasswordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg',
              onClick: toggleMatchPasswordIsvisible,
            }}
            isValid={matchPasswordIsValid}
            setIsValid={setMatchPasswordIsValid}
            customTest={{
              test: () => password === matchPassword,
              ...matchPasswordValidationData.custom,
            }}
            customDependancies={[password]}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button
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
