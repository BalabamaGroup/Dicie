import { useCallback, useEffect, useRef, useState } from "react";
import { socketUrl } from "../common/utils/url";

const useSocket = () => {
  const wss = useRef<WebSocket | null>(null);

  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<boolean>(false);

  const gettingData = useCallback(() => {
    if (!wss.current) return;
    wss.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setData(message);
      console.log(message);
    };
  }, []);

  useEffect(() => {
    document.cookie = sessionStorage.token;
    wss.current = new WebSocket(socketUrl());
    wss.current.onopen = () => setStatus(true);
    wss.current.onclose = () => setStatus(false);
    gettingData();

    return () => wss.current?.close();
  }, [wss, gettingData]);

  return [wss, data, status];
};

export default useSocket;
