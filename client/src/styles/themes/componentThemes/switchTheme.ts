import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    backgroundOn: 'none',
    textOn: colors.indigo[90],
    backgroundOff: colors.indigo.base,
    textOff: colors.lime[0],
  },
  lime: {
    backgroundOn: 'none',
    textOn: colors.lime[80],
    backgroundOff: colors.lime.base,
    textOff: colors.lime[80],
  },
};

const dark = {
  indigo: {
    backgroundOn: 'none',
    textOn: colors.indigo[0],
    backgroundOff: colors.indigo.base,
    textOff: colors.indigo[0],
  },
  lime: {
    backgroundOn: 'none',
    textOn: colors.lime[0],
    backgroundOff: colors.lime.base,
    textOff: colors.lime[80],
  },
};

const switchTheme = {
  light,
  dark,
};

export default switchTheme;
