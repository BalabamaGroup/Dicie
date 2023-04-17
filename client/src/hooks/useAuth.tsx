import { useNavigate } from 'react-router-dom';

import AuthAPI from '@/api/auth';
import routes from '@/common/constants/routes';
import useUserStore from '@/stores/UserStore';

const useAuth = () => {
  const navigate = useNavigate();
  const setUserStoreState = useUserStore.setState;

  const signUp = async (data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }) => {
    await AuthAPI.signUp(data);
    await signIn({
      username: data.username,
      password: data.password,
    });
  };

  const signIn = async (data: { username: string; password: string }) => {
    AuthAPI.signIn(data)
      .then((res) => {
        setUserStoreState((s) => ({ ...s, user: res }));
        res.token && sessionStorage.setItem('token', res.token);
        navigate(routes.HOME);
      })
      .catch(() => {
        return;
      });
  };

  const getTakenSignUpInfo = async () => {
    const result = await AuthAPI.getTakenSignUpInfo();
    return result;
  };

  const signOut = () => {
    setUserStoreState((s) => ({ ...s, user: null }));
    sessionStorage.removeItem('token');
    navigate(routes.SIGN_IN);
  };

  return { signUp, signIn, signOut, getTakenSignUpInfo };
};

export default useAuth;
