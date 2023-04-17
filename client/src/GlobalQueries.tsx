interface GlobalQueriesProps {}
import useUserStore from './stores/UserStore';

const GlobalQueries = ({}: GlobalQueriesProps) => {
  useUserStore((s) => s.queryFetchUser());
  return null;
};

export default GlobalQueries;
