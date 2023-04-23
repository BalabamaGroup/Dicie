import { useCallback, useEffect, useRef } from 'react';
import { create } from 'zustand';

import { Game, GameSpecific, Room } from '@/common/types/room';
import { ComponentColor } from '@/common/types/theme';
import { UserInGame } from '@/common/types/user';
import { roomSocketUrl } from '@/common/utils/url';
import useUserStore from '@/stores/UserStore';

interface GameStoreState {
  socketStatus: boolean;

  data: Game | null;
  specfic: GameSpecific | null;
  users: UserInGame[];
  isFriendModee: boolean;

  myTurn: boolean;
  getColor: { (): ComponentColor };

  getMePlayer: { (): UserInGame };
  getOtherPlayers: { (): UserInGame[] };
  getGoingPlayer: { (): UserInGame };

  subscribe: { (): void };
}

const useGameStore = create<GameStoreState>()((set, get) => ({
  ws: null,
  socketStatus: false,

  data: null,
  specfic: null,
  users: [],
  isFriendModee: false,

  myTurn: false,

  getColor: (): ComponentColor => {
    return get().myTurn ? 'lime' : 'indigo';
  },

  setMyTurn: (bool: boolean): void => {
    set((s) => ({ ...s, myTurn: bool }));
  },

  getMePlayer: (): UserInGame => {
    const me = useUserStore((s) => s.user!);
    const [mePlayer] = get().data!.users.filter((u) => u.id === me.id);
    return mePlayer;
  },

  getOtherPlayers: (): UserInGame[] => {
    const me = useUserStore((s) => s.user!);
    const otherPlayers = get().data!.users.filter((u) => u.id !== me.id);
    return otherPlayers;
  },

  getGoingPlayer: (): UserInGame => {
    const [goingPlayer] = get().data!.users.filter((u) => u.state.isGoing);
    return goingPlayer;
  },

  subscribe: (): void => subscribeToSocket(),
}));

const subscribeToSocket = () => {
  const ws = useRef<WebSocket | null>(null);
  const user = useUserStore((s) => s.user);
  if (!user) return;

  const getRoomData = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      let data: Game = JSON.parse(e.data);
      useGameStore.setState((s) => ({
        ...s,
        data,
        users: data.users,
        isFriendModee: data.isFriendMode,
      }));
      if (data.roomDataDto)
        useGameStore.setState((s) => ({ ...s, specfic: data.roomDataDto }));
    };
  }, []);

  useEffect(() => {
    ws.current = new WebSocket(roomSocketUrl + `?${user?.id}`);
    useGameStore.setState((s) => ({ ...s, ws: ws.current }));

    ws.current.onopen = () =>
      useGameStore.setState((s) => ({ ...s, socketStatus: true }));
    ws.current.onclose = () =>
      useGameStore.setState((s) => ({
        ...s,
        socketStatus: false,
        data: null,
        specific: null,
      }));
    getRoomData();

    return () => ws.current?.close();
  }, [ws, getRoomData]);
};

export default useGameStore;
