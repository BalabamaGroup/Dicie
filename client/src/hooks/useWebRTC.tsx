import { useCallback, useEffect, useRef, useState } from 'react';

const useWebRTC = () => {
  const ws = useRef<WebSocket | null>(null);

  const sendWebsocketData = async (message: any) => {
    if (!ws.current) return;
    ws.current.send(JSON.stringify(message));
  };

  useEffect(() => {
    const webSocketUrl = 'ws://localhost:8080/voicechat';
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const event = new CustomEvent(data.event, { detail: data.payload });
      window.dispatchEvent(event);
    };

    return () => ws.current?.close();
  }, [ws]);

  return { sendWebsocketData };
};

export default useWebRTC;
