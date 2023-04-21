import { useLocation, useParams } from 'react-router-dom';

import routes from '@/common/constants/routes';
import { size } from '@/common/utils/device';
import useWindowWidth from '@/hooks/useWindowWidth';
import useGameStore from '@/stores/GameStore';

export const useNavbarColor = (): 'indigo' | 'lime' => {
  const location = useLocation();
  const gameColor = useGameStore((s) => s.getColor());

  const deviceWidth = useWindowWidth(500);
  const isMobile = deviceWidth <= size.tablet;
  const defaultColor = isMobile ? 'lime' : 'indigo';

  if (
    location.pathname === routes.SIGN_IN ||
    location.pathname === routes.SIGN_UP
  )
    return 'indigo';

  if (location.pathname === '/home/:card') return defaultColor;
  if (location.pathname === '/home/createRoom') return 'lime';
  if (location.pathname === '/home/joinRoom') return 'indigo';

  if (location.pathname.includes('/room/')) return gameColor;

  return 'indigo';
};
