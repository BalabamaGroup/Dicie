import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    background: colors.indigo[20],
    backgroundVibrant: colors.indigo[0],
    text: colors.indigo[80],
    textPlaceholder: colors.indigo[40],
    textInvalid: colors.red.light,
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.red.light,
    shadow: shadows.indigo.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.indigo[40],
      fillHover: colors.indigo[80],
      background: 'none',
      backgroundHover: 'none',
    },
  },
  lime: {
    background: colors.lime[20],
    backgroundVibrant: colors.lime[0],
    text: colors.lime[100],
    textPlaceholder: colors.lime[40],
    textInvalid: colors.red.light,
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.red.light,
    shadow: shadows.lime.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.lime[40],
      fillHover: colors.lime[80],
      background: 'none',
      backgroundHover: 'none',
    },
  },
};

const dark = {
  indigo: {
    background: colors.indigo[80],
    backgroundVibrant: colors.indigo[100],
    text: colors.indigo[20],
    textPlaceholder: colors.indigo[60],
    textInvalid: colors.red.dark,
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.red.dark,
    shadow: shadows.dark.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.indigo[60],
      fillHover: colors.indigo[20],
      background: 'transparent',
      backgroundHover: 'none',
    },
  },
  lime: {
    background: colors.lime[80],
    backgroundVibrant: colors.lime[100],
    text: colors.lime.text.light,
    textPlaceholder: colors.lime[60],
    textInvalid: colors.red.dark,
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.red.dark,
    shadow: shadows.dark.small,
    shadowInvalid: shadows.red.small,
    icon: {
      fill: colors.lime[60],
      fillHover: colors.lime[20],
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
