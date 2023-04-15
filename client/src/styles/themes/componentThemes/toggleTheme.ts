import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    backgroundOff: colors.indigo[10],
    toggleOff: colors.lime[10],
    backgroundOn: colors.indigo[80],
    toggleOn: colors.lime.base,
  },
  lime: {
    backgroundOff: colors.lime[10],
    toggleOff: colors.lime[80],
    backgroundOn: colors.lime[80],
    toggleOn: colors.lime.base,
  },
};

const dark = {
  indigo: {
    backgroundOff: colors.indigo[80],
    toggleOff: colors.indigo.base,
    backgroundOn: colors.indigo.base,
    toggleOn: colors.indigo[80],
  },
  lime: {
    backgroundOff: colors.lime[80],
    toggleOff: colors.lime.base,
    backgroundOn: colors.lime.base,
    toggleOn: colors.lime[80],
  },
};

const toggleTheme = {
  light,
  dark,
};

export default toggleTheme;
