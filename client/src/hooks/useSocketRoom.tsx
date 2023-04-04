import { useCallback, useEffect, useRef, useState } from 'react';

import { Game } from '@/common/types/room';
import { socketUrl } from '@/common/utils/url';
import useUserStore from '@/stores/UserStore';

const useSocketRoom = () => {
  const ws = useRef<WebSocket | null>(null);

  const user = useUserStore((s) => s.user);
  // if (!user) return { data: null, status: false };

  const [status, setStatus] = useState<boolean>(false);
  const [data, setData] = useState<Game | null>(null);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setData(data);
    };
  }, []);

  useEffect(() => {
    const webSocketUrl = socketUrl() + `?${user?.id}`;
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => setStatus(true);
    ws.current.onclose = () => setStatus(false);
    gettingData();

    return () => ws.current?.close();
  }, [ws, gettingData]);

  return { data, status };
};

export default useSocketRoom;
