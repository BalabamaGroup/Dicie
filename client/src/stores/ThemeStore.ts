import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  setAutoTheme: Function;
  setLightTheme: Function;
  setDarkTheme: Function;
  toggleTheme: Function;
}

const getBrowserTheme = () => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const getInititalTheme = () => {
  const themeFromLS = localStorage.getItem('theme');
  if (themeFromLS === 'light') return 'light';
  else if (themeFromLS === 'dark') return 'dark';
  else return getBrowserTheme();
};

export const useThemeStore = create<ThemeState>()((set, get) => ({
  theme: getInititalTheme(),

  setAutoTheme: () => {
    set((state) => ({ ...state, theme: getBrowserTheme() }));
    localStorage.setItem('theme', 'auto');
  },

  setLightTheme: () => {
    set((state) => ({ ...state, theme: 'light' }));
    localStorage.setItem('theme', 'light');
  },

  setDarkTheme: () => {
    set((state) => ({ ...state, theme: 'dark' }));
    localStorage.setItem('theme', 'dark');
  },

  toggleTheme: () => {
    if (get().theme === 'light') get().setDarkTheme();
    else if (get().theme === 'dark') get().setLightTheme();
    else get().setAutoTheme();
  },
}));
