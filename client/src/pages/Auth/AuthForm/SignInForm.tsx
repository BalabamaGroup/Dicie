import * as Styled from './index.styled';
import routes from '@/common/constants/routes';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiInput from '@/components/MultiInput';
import Toast from '@/components/Toast';
import useAuthPageStore from '@/stores/AuthPageStore';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

interface signInProps {}

const SignInForm = ({}: signInProps) => {
  const theme = useThemeStore((state) => state.theme);
  const defaultColor = theme === 'light' ? 'indigo' : 'lime';

  const [isLoadingSignIn, setIsLoadingSignIn] = useState<boolean>(false);

  // prettier-ignore
  const [username,  validateUsername] = useAuthPageStore(
    (s) => [s.username, s.validateUsername]);
  const onChangeUsername = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, username: e.target.value }));
    validateUsername();
  };

  // prettier-ignore
  const [password, validatePassword] = useAuthPageStore(
    (s) => [s.password, s.validatePassword]);
  const onChangePassword = (e: any) => {
    useAuthPageStore.setState((s) => ({ ...s, password: e.target.value }));
    validatePassword();
  };

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const togglePasswordIsvisible = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const signIn = useUserStore((s) => s.signIn);
  const navigate = useNavigate();
  const onSignIn = async () => {
    try {
      setIsLoadingSignIn(true);
      await signIn({
        username: username,
        password: password,
      });
      navigate(routes.HOME);
    } catch (e) {
      Toast.error('Could not authorize with provided data');
    } finally {
      setIsLoadingSignIn(false);
    }
  };

  return (
    <Styled.AuthForm>
      <ReactSVG
        className='preload-input-icon'
        src='/images/svgs/eye.closed.svg'
      />
      <Styled.AuthHeader>
        <div className='main'>Welcome back</div>
        <div className='subheader'>You’ve been missed!</div>
      </Styled.AuthHeader>

      <Styled.MultiInputWrapper inputCount={2}>
        <MultiInput className='auth_multiinput' isScale={true}>
          <Input
            id={'signUp-username'}
            key={'signUp-username'}
            color='indigo'
            size='large'
            placeholder='Username'
            value={username}
            onChange={onChangeUsername}
            onEnter={onSignIn}
          />
          <Input
            id={'signUp-username'}
            key={'signUp-passsword'}
            color='indigo'
            size='large'
            placeholder='Password'
            type={passwordIsVisible ? 'text' : 'password'}
            icon={
              passwordIsVisible
                ? '/images/svgs/eye.closed.svg'
                : '/images/svgs/eye.opened.svg'
            }
            onIconClick={togglePasswordIsvisible}
            value={password}
            onChange={onChangePassword}
            onEnter={onSignIn}
          />
        </MultiInput>
      </Styled.MultiInputWrapper>

      <Button
        color='indigo'
        isPrimary
        isScale
        onClick={onSignIn}
        isLoading={isLoadingSignIn}
        size='large'
      >
        Sign In
      </Button>
    </Styled.AuthForm>
  );
};

export default SignInForm;
