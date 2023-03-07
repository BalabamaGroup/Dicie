const useTheme = () => {
  const getTheme = () => {
    const storageTheme = localStorage.getItem('theme');
    if (!storageTheme) return 'light';
    else if (storageTheme === 'auto') return getBrowserTheme();
    return storageTheme;
  };

  const getBrowserTheme = () => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  };

  const setAutoTheme = () => {
    localStorage.setItem('theme', 'auto');
    window.dispatchEvent(new Event('storage'));
  };

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    window.dispatchEvent(new Event('storage'));
  };

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    window.dispatchEvent(new Event('storage'));
  };

  const toggleTheme = () => {
    switch (getTheme()) {
      case 'dark':
        setLightTheme();
        return;
      case 'light':
        setDarkTheme();
        return;
    }
  };

  return {
    getTheme,
    getBrowserTheme,
    setAutoTheme,
    setLightTheme,
    setDarkTheme,
    toggleTheme,
  };
};

export default useTheme;
