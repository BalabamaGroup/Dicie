import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    scrollBackground: colors.indigo[10],
    thumbBackground: colors.indigo[0],
  },
  lime: {
    scrollBackground: colors.lime[10],
    thumbBackground: colors.lime[0],
  },
};

const dark = {
  indigo: {
    scrollBackground: colors.indigo[80],
    thumbBackground: colors.indigo[90],
  },
  lime: {
    scrollBackground: colors.lime[80],
    thumbBackground: colors.lime[90],
  },
};

const scrollTheme = {
  light,
  dark,
};

export default scrollTheme;
