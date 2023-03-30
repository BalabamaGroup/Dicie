import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    text: colors.indigo[20],
    headerBackground: colors.indigo.base,
    bodyBackground: colors.indigo[20],
    indicator: colors.indigo[80],
    indicatorBackground: colors.indigo[20],
    icon: colors.indigo[80],
  },
  lime: {
    text: colors.lime[80],
    headerBackground: colors.lime.base,
    bodyBackground: colors.lime[20],
    indicator: colors.lime[80],
    indicatorBackground: colors.lime[20],
    icon: colors.lime[80],
  },
};

const dark = {
  indigo: {
    text: colors.indigo[20],
    headerBackground: colors.indigo.base,
    bodyBackground: colors.indigo[80],
    indicator: colors.indigo[20],
    indicatorBackground: colors.indigo[20],
    icon: colors.indigo[20],
  },
  lime: {
    text: colors.lime[80],
    headerBackground: colors.lime.base,
    bodyBackground: colors.lime[80],
    indicator: colors.lime.text.light,
    indicatorBackground: colors.lime[80],
    icon: colors.lime.text.light,
  },
};

const radioExtendedTheme = {
  light,
  dark,
};

export default radioExtendedTheme;
