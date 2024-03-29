import * as Styled from './index.styled';
import { RoleTypes } from '@/common/constants';
import routes from '@/common/constants/routes';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiInput from '@/components/MultiInput';
import useAuthPageStore from '@/stores/AuthPageStore';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const SignUpForm = () => {
  const [isLoadingSignUp, setIsLoadingSignUp] = useState<boolean>(false);

  // prettier-ignore
  const [username, usernameIsValid, validateUsername, usernameErrorNote] = useAuthPageStore(
    (s) => [s.username, s.usernameIsValid, s.validateUsername, s.usernameErrorNote]);
  const onChangeUsername = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, username: e.target.value }));
    validateUsername();
  };

  // prettier-ignore
  const [email, emailIsValid, validateEmail, emailErrorNote] = useAuthPageStore(
    (s) => [s.email, s.emailIsValid, s.validateEmail, s.emailErrorNote]);
  const onChangeEmail = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, email: e.target.value }));
    validateEmail();
  };

  // prettier-ignore
  const [password, passwordIsValid, validatePassword, passwordErrorNote] = useAuthPageStore(
    (s) => [s.password, s.passwordIsValid, s.validatePassword, s.passwordErrorNote]);
  const onChangePassword = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, password: e.target.value }));
    validatePassword();
  };

  // prettier-ignore
  const [matchPassword, matchPasswordIsValid, validateMatchPassword, matchPasswordErrorNote] = useAuthPageStore(
    (s) => [s.matchPassword, s.matchPasswordIsValid, s.validateMatchPassword, s.matchPasswordErrorNote]);
  useState<string>('');
  const onChangeMatchPassword = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, matchPassword: e.target.value }));
    validateMatchPassword();
  };

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const togglePasswordIsvisible = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const [matchPasswordIsVisible, setMatchPasswordIsVisible] = useState(false);
  const toggleMatchPasswordIsvisible = () =>
    setMatchPasswordIsVisible(!matchPasswordIsVisible);

  const signUp = useUserStore((s) => s.signUp);
  const navigate = useNavigate();
  const onSignUp = async () => {
    try {
      setIsLoadingSignUp(true);
      await signUp({
        username: username,
        password: password,
        email: email,
        role: RoleTypes.USER,
      }).then(() => navigate(routes.HOME));
    } finally {
      setIsLoadingSignUp(false);
    }
  };

  const theme = useThemeStore((state) => state.theme);
  const defaultColor = theme === 'light' ? 'indigo' : 'lime';

  return (
    <Styled.AuthForm>
      <ReactSVG
        className='preload-input-icon'
        src='/images/svgs/eye.closed.svg'
      />
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
            id={'signUp-username'}
            key={'signUp-username'}
            size='large'
            color='indigo'
            placeholder='Username'
            value={username}
            onChange={onChangeUsername}
            isError={!usernameIsValid}
            errorNote={usernameErrorNote}
            onEnter={onSignUp}
          />

          <Input
            id={'signUp-email'}
            key={'signUp-email'}
            size='large'
            color='indigo'
            type={'email'}
            placeholder='Email'
            value={email}
            onChange={onChangeEmail}
            isError={!emailIsValid}
            errorNote={emailErrorNote}
            onEnter={onSignUp}
          />

          <Input
            id={'signUp-password'}
            key={'signUp-passsword'}
            size='large'
            color='indigo'
            type={passwordIsVisible ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={onChangePassword}
            icon={
              passwordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg'
            }
            onIconClick={togglePasswordIsvisible}
            isError={!passwordIsValid}
            errorNote={passwordErrorNote}
            onEnter={onSignUp}
          />

          <Input
            id={'signUp-passsword-repeat'}
            key={'signUp-passsword-repeat'}
            size='large'
            color='indigo'
            type={matchPasswordIsVisible ? 'text' : 'password'}
            placeholder='Repeat password'
            value={matchPassword}
            onChange={onChangeMatchPassword}
            icon={
              matchPasswordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg'
            }
            onIconClick={toggleMatchPasswordIsvisible}
            isError={!matchPasswordIsValid}
            errorNote={matchPasswordErrorNote}
            onEnter={onSignUp}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button
        color='indigo'
        isPrimary
        isScale={true}
        onClick={onSignUp}
        size='large'
        isLoading={isLoadingSignUp}
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
