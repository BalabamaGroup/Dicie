import GlobalStyle from '@/app/styles/GlobalStyle';
import Theme from '@/app/styles/Theme';

const WithTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <GlobalStyle />
      {children}
    </Theme>
  );
};

export default WithTheme;
