let theme = localStorage.getItem('theme');
if (!theme || theme === 'auto')
  theme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

document.body.style.background = theme === 'light' ? '#ECEEFE' : '#181621';
