import colors, { hexToRgba } from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    labelText: colors.indigo[80],
    background: colors.indigo[0],
    text: colors.indigo[80],
    textPlaceholder: colors.indigo[50],
    textInvalid: colors.red.light,
    focusBorder: colors.indigo.dark,
    focusBorderInvalid: colors.red.light,
    shadowRGBA: hexToRgba(colors.indigo.dark, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.red.light, 0.5),
    icon: {
      fill: colors.indigo[50],
      fillHover: colors.indigo[80],
    },
  },
  lime: {
    labelText: colors.lime[80],
    background: colors.lime[0],
    text: colors.lime[80],
    textPlaceholder: colors.lime[50],
    textInvalid: colors.red.light,
    focusBorder: colors.lime.dark,
    focusBorderInvalid: colors.red.light,
    shadowRGBA: hexToRgba(colors.lime.dark, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.red.light, 0.5),
    icon: {
      fill: colors.lime[50],
      fillHover: colors.lime[80],
    },
  },
};

const dark = {
  indigo: {
    labelText: colors.indigo[0],
    background: colors.indigo[90],
    text: colors.indigo[0],
    textPlaceholder: colors.indigo[70],
    textInvalid: colors.red.dark,
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.red.dark,
    shadowRGBA: hexToRgba(colors.indigo.base, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.red.dark, 0.5),
    icon: {
      fill: colors.indigo[70],
      fillHover: colors.indigo[10],
    },
  },
  lime: {
    labelText: colors.lime[0],
    background: colors.lime[90],
    text: colors.lime[0],
    textPlaceholder: colors.lime[70],
    textInvalid: colors.red.dark,
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.red.dark,
    shadowRGBA: hexToRgba(colors.lime.base, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.red.dark, 0.5),
    icon: {
      fill: colors.lime[70],
      fillHover: colors.lime[10],
    },
  },
};

const inputTheme = {
  light,
  dark,
};

export default inputTheme;
