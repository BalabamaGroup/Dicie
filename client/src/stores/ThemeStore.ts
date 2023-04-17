import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  themeLS: 'auto' | 'light' | 'dark';
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

export const getInititalTheme = () => {
  const themeFromLS = localStorage.getItem('theme');
  if (themeFromLS === 'light') return 'light';
  else if (themeFromLS === 'dark') return 'dark';
  else return getBrowserTheme();
};

export const getInititalThemeLS = () => {
  const themeFromLS = localStorage.getItem('theme');
  if (themeFromLS === 'light') return 'light';
  else if (themeFromLS === 'dark') return 'dark';
  else return 'auto';
};

export const useThemeStore = create<ThemeState>()((set, get) => ({
  theme: getInititalTheme(),
  themeLS: getInititalThemeLS(),

  setAutoTheme: () => {
    localStorage.setItem('theme', 'auto');
    set((state) => ({ ...state, theme: getBrowserTheme(), themeLS: 'auto' }));
  },

  setLightTheme: () => {
    localStorage.setItem('theme', 'light');
    set((state) => ({ ...state, theme: 'light', themeLS: 'light' }));
  },

  setDarkTheme: () => {
    localStorage.setItem('theme', 'dark');
    set((state) => ({ ...state, theme: 'dark', themeLS: 'dark' }));
  },

  toggleTheme: () => {
    if (get().theme === 'light') get().setDarkTheme();
    else get().setLightTheme();
  },
}));

export default useThemeStore;
