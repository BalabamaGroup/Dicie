import { create } from 'zustand';

import { homeContentCards } from '@/shared/constants';

interface CreateJoinRoomCards {
  selectedCard: string;

  isDefault: boolean;
  isCreateRoom: boolean;
  isJoinRoom: boolean;

  setCreateRoom: Function;
  setJoinRoom: Function;
}

export const useCreateJoinRoomCards = create<CreateJoinRoomCards>(
  (set, get) => ({
    selectedCard: homeContentCards.DEFAULT,

    isDefault: get().selectedCard === homeContentCards.DEFAULT,
    isCreateRoom: get().selectedCard === homeContentCards.CREATE_ROOM,
    isJoinRoom: get().selectedCard === homeContentCards.JOIN_ROOM,

    setCreateRoom: () => {
      if (get().isCreateRoom) return;
      set(() => ({ selectedCard: homeContentCards.CREATE_ROOM }));
    },

    setJoinRoom: () => {
      if (get().isJoinRoom) return;
      set(() => ({ selectedCard: homeContentCards.JOIN_ROOM }));
    },
  })
);
