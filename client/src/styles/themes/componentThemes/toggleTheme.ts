import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    off: {
      background: colors.indigo[0],
      border: colors.indigo[60],
      toggle: colors.indigo[60],
      toggleHover: colors.indigo[80],
    },
    on: {
      background: colors.indigo.base,
      border: colors.indigo.dark,
      toggle: colors.indigo[80],
    },
  },
  lime: {
    off: {
      background: colors.lime[0],
      border: colors.lime[60],
      toggle: colors.lime[60],
      toggleHover: colors.lime[80],
    },
    on: {
      background: colors.lime.base,
      border: colors.lime.dark,
      toggle: colors.lime[80],
    },
  },
};

const dark = {
  indigo: {
    off: {
      background: colors.indigo[90],
      border: colors.indigo[90],
      toggle: colors.indigo[70],
      toggleHover: colors.indigo.base,
    },
    on: {
      background: colors.indigo.base,
      border: colors.indigo.base,
      toggle: colors.indigo[80],
    },
  },
  lime: {
    off: {
      background: colors.lime[90],
      border: colors.lime[90],
      toggle: colors.lime[70],
      toggleHover: colors.lime.base,
    },
    on: {
      background: colors.lime.base,
      borderO: colors.lime.base,
      toggle: colors.lime[80],
    },
  },
};

const toggleTheme = {
  light,
  dark,
};

export default toggleTheme;
