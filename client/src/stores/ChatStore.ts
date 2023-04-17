import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { create } from 'zustand';

import { ChatMessage } from '@/common/types/chat';
import { chatSocketUrl } from '@/common/utils/url';
import useUserStore from '@/stores/UserStore';

interface ChatStoreState {
  ws: WebSocket | null;
  status: boolean;
  messages: ChatMessage[];

  sendMessage: Function;
  subscribe: Function;
}

const useChatStore = create<ChatStoreState>()((set, get) => ({
  ws: null,
  status: false,
  messages: [],

  sendMessage: (message: ChatMessage) => {
    get().ws?.send(JSON.stringify(message));
  },

  subscribe: () => {
    subscribeToSocket();
  },
}));

const subscribeToSocket = () => {
  const ws = useRef<WebSocket | null>(null);
  const user = useUserStore((s) => s.user);
  if (!user) return;

  const getMessages = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);
      let messages = data.map((m: string) => JSON.parse(m));
      useChatStore.setState((s) => ({ ...s, messages }));
    };
  }, []);

  useEffect(() => {
    ws.current = new WebSocket(chatSocketUrl + `?${user.id}`);
    useChatStore.setState((s) => ({ ...s, ws: ws.current }));

    ws.current.onopen = () =>
      useChatStore.setState((s) => ({ ...s, status: true }));
    ws.current.onclose = () =>
      useChatStore.setState((s) => ({ ...s, status: false }));
    getMessages();

    return () => ws.current?.close();
  }, [ws, getMessages]);
};

export default useChatStore;
