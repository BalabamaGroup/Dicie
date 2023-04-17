import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    background: colors.indigo[10],
    backgroundVibrant: colors.indigo[0],
    text: colors.indigo[80],
    textPlaceholder: colors.indigo[60],
    textInvalid: colors.red.light,
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.red.light,
    shadow: shadows.indigo.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.indigo[60],
      fillHover: colors.indigo[80],
      background: 'none',
      backgroundHover: 'none',
    },
  },
  lime: {
    background: colors.lime[10],
    backgroundVibrant: colors.lime[0],
    text: colors.lime[90],
    textPlaceholder: colors.lime[60],
    textInvalid: colors.red.light,
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.red.light,
    shadow: shadows.lime.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.lime[60],
      fillHover: colors.lime[80],
      background: 'none',
      backgroundHover: 'none',
    },
  },
};

const dark = {
  indigo: {
    background: colors.indigo[80],
    backgroundVibrant: colors.indigo[90],
    text: colors.indigo[10],
    textPlaceholder: colors.indigo[70],
    textInvalid: colors.red.dark,
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.red.dark,
    shadow: shadows.dark.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.indigo[70],
      fillHover: colors.indigo[10],
      background: 'transparent',
      backgroundHover: 'none',
    },
  },
  lime: {
    background: colors.lime[80],
    backgroundVibrant: colors.lime[90],
    text: colors.lime[0],
    textPlaceholder: colors.lime[70],
    textInvalid: colors.red.dark,
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.red.dark,
    shadow: shadows.dark.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.lime[70],
      fillHover: colors.lime[10],
      background: 'transparent',
      backgroundHover: 'none',
    },
  },
};

const inputTheme = {
  light,
  dark,
};

export default inputTheme;
