import Pages from '@/pages/index';

import WithQuery from './providers/WithQuery';
import WithTheme from './providers/WithTheme';
import WithToast from './providers/WithToast';

const App = () => {
  return (
    <WithQuery>
      <WithTheme>
        <WithToast />
        <Pages />
      </WithTheme>
    </WithQuery>
  );
};

export default App;
