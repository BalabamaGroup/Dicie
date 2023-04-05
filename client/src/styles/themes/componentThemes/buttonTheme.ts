import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    background: colors.indigo[20],
    text: colors.indigo.text.dark,
    shadow: shadows.light.medium,
    backgroundPrimary: colors.indigo.base,
    textPrimary: colors.indigo.text.light,
    shadowPrimary: shadows.indigo.medium,
    activeBorderPrimary: colors.indigo[20],
  },
  lime: {
    background: colors.lime[20],
    text: colors.lime.text.dark,
    shadow: shadows.light.medium,
    backgroundPrimary: '#E9F696',
    textPrimary: colors.lime.text.dark,
    shadowPrimary: shadows.lime.medium,
    activeBorderPrimary: colors.lime[20],
  },
};

const dark = {
  indigo: {
    background: colors.indigo[80],
    text: colors.indigo.text.light,
    shadow: shadows.dark.medium,
    backgroundPrimary: colors.indigo.base,
    textPrimary: colors.indigo.text.light,
    shadowPrimary: colors.indigo.base,
    activeBorderPrimary: colors.indigo[80],
  },
  lime: {
    background: colors.lime[80],
    text: colors.lime.text.light,
    shadow: shadows.dark.medium,
    backgroundPrimary: colors.lime.base,
    textPrimary: colors.lime.text.dark,
    shadowPrimary: colors.lime.base,
    activeBorderPrimary: colors.lime[80],
  },
};

const buttonTheme = {
  light,
  dark,
};

export default buttonTheme;
