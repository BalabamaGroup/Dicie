const useTheme = () => {
  const setAutoTheme = () => {
    localStorage.setItem("theme", "auto");
    window.dispatchEvent(new Event("storage"));
  };

  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    window.dispatchEvent(new Event("storage"));
  };

  const setDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    window.dispatchEvent(new Event("storage"));
  };

  const toggleTheme = () => {
    switch (localStorage.getItem("theme")) {
      case "dark":
        setLightTheme();
        return;
      case "light":
        setDarkTheme();
        return;
      default:
        setDarkTheme();
        return;
    }
  };

  return { setAutoTheme, setLightTheme, setDarkTheme, toggleTheme };
};

export default useTheme;
