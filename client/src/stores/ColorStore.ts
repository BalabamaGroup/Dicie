import { create } from 'zustand';

interface ThemeState {
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

// const defaultColor = {
//   home: 'neutral',
//   room: 'indigo',
//   guessBoo: 'indigo',
//   guessBoo: 'indigo',
// };

// const getInitialColor = () => {
//   const initalColorLS = localStorage.getItem('color');
//   const initialColor: any = initalColorLS
//     ? JSON.parse(initalColorLS)
//     : defaultColor;
//   return initialColor;
// };

export const useColorStore = create<ThemeState>()((set, get) => ({
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
