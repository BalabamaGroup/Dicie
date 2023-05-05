import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    scrollBackground: colors.indigo[10],
    thumbBackground: colors.indigo[50],
  },
  lime: {
    scrollBackground: colors.lime[10],
    thumbBackground: colors.lime[50],
  },
};

const dark = {
  indigo: {
    scrollBackground: colors.indigo[80],
    thumbBackground: colors.indigo[70],
  },
  lime: {
    scrollBackground: colors.lime[80],
    thumbBackground: colors.lime[70],
  },
};

const scrollTheme = {
  light,
  dark,
};

export default scrollTheme;
