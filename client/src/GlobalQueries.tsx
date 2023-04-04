interface GlobalQueriesProps {}
import { useUserStore } from './stores/UserStore';

const GlobalQueries = ({}: GlobalQueriesProps) => {
  const queryFetchUser = useUserStore((s) => s.queryFetchUser);
  queryFetchUser();

  return null;
};

export default GlobalQueries;
