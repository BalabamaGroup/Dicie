import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    backgroundOff: 'none',
    textOff: colors.indigo[80],
    backgroundOn: colors.indigo.base,
    textOn: colors.indigo[0],
  },
  lime: {
    backgroundOff: 'none',
    textOff: colors.lime[80],
    backgroundOn: colors.lime.base,
    textOn: colors.lime[80],
  },
};

const dark = {
  indigo: {
    backgroundOff: 'none',
    textOff: colors.indigo.light,
    backgroundOn: colors.indigo.base,
    textOn: colors.indigo[0],
  },
  lime: {
    backgroundOff: 'none',
    textOff: colors.lime.light,
    backgroundOn: colors.lime.base,
    textOn: colors.lime[80],
  },
};

const switchTheme = {
  light,
  dark,
};

export default switchTheme;
