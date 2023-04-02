import { useCallback, useEffect, useRef, useState } from 'react';

import { Game } from '@/common/types/room';
import { socketUrl } from '@/common/utils/url';

const useSocketRoom = () => {
  const ws = useRef<WebSocket | null>(null);

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
    const webSocketUrl = socketUrl() + `?${sessionStorage.getItem('id')}`;
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => {
      console.log('opened');
      setStatus(true);
    };
    ws.current.onclose = () => {
      console.log('closed');
      setStatus(false);
    };
    gettingData();

    return () => ws.current?.close();
  }, [ws, gettingData]);

  return { data, status };
};

export default useSocketRoom;
