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
