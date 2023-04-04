import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    scrollBackground: colors.indigo[0],
    thumbBackground: colors.indigo[20],
  },
  lime: {
    scrollBackground: colors.lime[0],
    thumbBackground: colors.lime[20],
  },
};

const dark = {
  indigo: {
    scrollBackground: colors.indigo[100],
    thumbBackground: colors.indigo[80],
  },
  lime: {
    scrollBackground: colors.lime[100],
    thumbBackground: colors.lime[80],
  },
};

const scrollTheme = {
  light,
  dark,
};

export default scrollTheme;
