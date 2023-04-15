import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    scrollBackground: colors.indigo[0],
    thumbBackground: colors.indigo[10],
  },
  lime: {
    scrollBackground: colors.lime[0],
    thumbBackground: colors.lime[10],
  },
};

const dark = {
  indigo: {
    scrollBackground: colors.indigo[90],
    thumbBackground: colors.indigo[80],
  },
  lime: {
    scrollBackground: colors.lime[90],
    thumbBackground: colors.lime[80],
  },
};

const scrollTheme = {
  light,
  dark,
};

export default scrollTheme;
