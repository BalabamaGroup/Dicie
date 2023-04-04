import { useCallback, useEffect, useRef, useState } from 'react';

import { ChatMessage } from '@/common/types/chat';
import { chatSocketUrl } from '@/common/utils/url';
import { useUserStore } from '@/stores/UserStore';

const useSocketChat = () => {
  const ws = useRef<WebSocket | null>(null);

  const user = useUserStore((s) => s.user);
  if (!user) return null;

  const [messages, setMessages] = useState<ChatMessage[] | null>(null);
  const [status, setStatus] = useState<boolean>(false);

  const getMessages = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);
      let messages = data.map((m: string) => JSON.parse(m));
      setMessages(messages);
    };
  }, []);

  const sendMessage = (message: any) => {
    if (!ws.current) return;
    ws.current.send(JSON.stringify(message));
  };

  useEffect(() => {
    const webSocketUrl = chatSocketUrl() + `?${user.id}`;
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
