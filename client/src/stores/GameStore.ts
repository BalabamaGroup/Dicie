import { create } from 'zustand';

interface GameState {
  isWait: boolean;
  isGo: boolean;
  setWait: Function;
  setGo: Function;
}

export const useGameStore = create<GameState>()((set) => ({
  isWait: true,
  isGo: false,

  setWait: () => set((state) => ({ ...state, isWait: true, isGo: false })),
  setGo: () => set((state) => ({ ...state, isWait: false, isGo: true })),
}));
