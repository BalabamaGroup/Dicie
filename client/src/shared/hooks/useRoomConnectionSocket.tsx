import { useCallback, useEffect, useRef, useState } from 'react';

import { Game } from '@/shared/types/room';
import { socketUrl } from '@/shared/utils/url';

const useRoomConnectionSocket = () => {
  const ws = useRef<WebSocket | null>(null);

  const [data, setData] = useState<Game | null>(null);
  const [status, setStatus] = useState<boolean>(false);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      setData(data);
    };
  }, []);

  useEffect(() => {
    const webSocketUrl = socketUrl() + `?${sessionStorage.getItem('id')}`;
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => setStatus(true);
    ws.current.onclose = () => setStatus(false);
    gettingData();

    return () => ws.current?.close();
  }, [ws, gettingData]);

  return { data, status };
};

export default useRoomConnectionSocket;