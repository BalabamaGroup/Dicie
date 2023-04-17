import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    text: colors.indigo[10],
    headerBackground: colors.indigo.base,
    bodyBackground: colors.indigo[10],
    indicator: colors.indigo[80],
    indicatorBackground: colors.indigo[10],
    icon: colors.indigo[80],
  },
  lime: {
    text: colors.lime[80],
    headerBackground: colors.lime.base,
    bodyBackground: colors.lime[10],
    indicator: colors.lime[80],
    indicatorBackground: colors.lime[10],
    icon: colors.lime[80],
  },
};

const dark = {
  indigo: {
    text: colors.indigo[10],
    headerBackground: colors.indigo.base,
    bodyBackground: colors.indigo[80],
    indicator: colors.indigo[10],
    indicatorBackground: colors.indigo[10],
    icon: colors.indigo[10],
  },
  lime: {
    text: colors.lime[80],
    headerBackground: colors.lime.base,
    bodyBackground: colors.lime[80],
    indicator: colors.lime[0],
    indicatorBackground: colors.lime[80],
    icon: colors.lime[0],
  },
};

const radioExtendedTheme = {
  light,
  dark,
};

export default radioExtendedTheme;
