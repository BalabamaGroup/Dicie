import { create } from 'zustand';

export type homeCardType = undefined | 'createRoom' | 'joinRoom';

interface HomeStoreState {
  card: homeCardType;
  setCreateRoom: Function;
  setJoinRoom: Function;
}

const useHomeStore = create<HomeStoreState>()((set) => ({
  card: undefined,

  setDefault: () => set(() => ({ card: undefined })),
  setCreateRoom: () => set(() => ({ card: 'createRoom' })),
  setJoinRoom: () => set(() => ({ card: 'joinRoom' })),
}));

export default useHomeStore;
