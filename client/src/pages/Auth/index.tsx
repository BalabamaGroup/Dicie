import { useLocation, useNavigate } from 'react-router-dom';

import routes from '@/common/constants/routes';
import Switch from '@/components/Switch';
import useThemeStore from '@/stores/ThemeStore';

import AuthForm from './AuthForm';
import * as Styled from './index.styled';

const SignUp = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const formType = location.pathname === routes.SIGN_UP ? 'signUp' : 'signIn';

  const theme = useThemeStore((state) => state.theme);

  const onSignIn = (e: any) => {
    // e.preventDefault();
    navigate(routes.SIGN_IN);
  };

  const onSignUp = (e: any) => {
    // e.preventDefault();
    navigate(routes.SIGN_UP);
  };

  return (
    <Styled.SignUp>
      <Styled.AuthPicture>
        <img src={`/images/pngs/auth-picture.light.png`} alt='' />
      </Styled.AuthPicture>

      <Styled.AuthContent>
        <Switch
          color='indigo'
          className='auth_switch'
          options={[
            {
              id: 'signin',
              label: 'Sign In',
              onClick: onSignIn,
              defaultChoice: formType === 'signIn',
            },
            {
              id: 'signup',
              label: 'Sign Up',
              onClick: onSignUp,
              defaultChoice: formType === 'signUp',
            },
          ]}
        />

        <AuthForm type={formType} />
      </Styled.AuthContent>
    </Styled.SignUp>
  );
};

export default SignUp;
