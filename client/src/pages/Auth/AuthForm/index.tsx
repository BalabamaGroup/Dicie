import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface AuthFormProps {
  type: 'signUp' | 'signIn';
}

const AuthForm = ({ type }: AuthFormProps) => {
  switch (type) {
    case 'signUp':
      return <SignUpForm />;
    case 'signIn':
      return <SignInForm />;
  }
};

export default AuthForm;
