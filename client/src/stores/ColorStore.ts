import { create } from 'zustand';

interface ColorStoreState {
  color: {
    home: 'neutral' | 'indigo' | 'lime';
    room: 'indigo' | 'lime';
    guessBoo: 'indigo' | 'lime';
  };
  isWait: Function;
  isGo: Function;
  setWait: Function;
  setGo: Function;
}

type pageId = 'home' | 'room' | 'guessBoo' | 'guessBoo';

const useColorStore = create<ColorStoreState>()((set, get) => ({
  color: {
    home: 'neutral',
    room: 'indigo',
    guessBoo: 'indigo',
  },

  isWait: (pageId: pageId) => get().color[pageId] === 'indigo',
  isGo: (pageId: pageId) => get().color[pageId] === 'lime',

  setWait: (pageId: pageId) => {
    let newColor = { ...get().color };
    newColor[pageId] = 'indigo';
    setTimeout(() => set((state) => ({ ...state, color: newColor })), 0);
  },

  setGo: (pageId: pageId) => {
    const newColor = { ...get().color };
    newColor[pageId] = 'lime';
    setTimeout(() => set((state) => ({ ...state, color: newColor })), 0);
  },
}));

export default useColorStore;
