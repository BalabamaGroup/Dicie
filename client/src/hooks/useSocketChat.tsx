import { useCallback, useEffect, useRef, useState } from 'react';

import { ChatMessage } from '@/common/types/chat';
import { chatSocketUrl } from '@/common/utils/url';

const useSocketChat = () => {
  const ws = useRef<WebSocket | null>(null);

  const [messages, setMessages] = useState<ChatMessage[] | null>(null);
  const [status, setStatus] = useState<boolean>(false);

  const getMessages = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      const messages: string[] = JSON.parse(e.data);
      setMessages(messages.map((m) => JSON.parse(m)));
    };
  }, []);

  const sendMessage = (message: any) => {
    if (!ws.current) return;
    ws.current.send(JSON.stringify(message));
  };

  useEffect(() => {
    const webSocketUrl = chatSocketUrl() + `?${sessionStorage.getItem('id')}`;
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => setStatus(true);
    ws.current.onclose = () => setStatus(false);
    getMessages();

    return () => ws.current?.close();
  }, [ws, getMessages]);

  return {
    status,
    messages,
    actions: {
      send: sendMessage,
    },
  };
};

export default useSocketChat;
