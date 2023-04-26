import colors, { hexToRgba } from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    labelText: colors.indigo[80],
    background: colors.indigo[0],
    text: colors.indigo[80],
    textPlaceholder: colors.indigo[50],
    textInvalid: colors.indigo.danger.light,
    border: colors.indigo[50],
    borderHover: colors.indigo[60],
    focusBorder: colors.indigo.dark,
    focusBorderInvalid: colors.indigo.danger.light,
    shadowRGBA: hexToRgba(colors.indigo.dark, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.indigo.danger.light, 0.5),
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
    textInvalid: colors.lime.danger.light,
    border: colors.lime[50],
    borderHover: colors.lime[60],
    focusBorder: colors.lime.dark,
    focusBorderInvalid: colors.lime.danger.light,
    shadowRGBA: hexToRgba(colors.lime.dark, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.lime.danger.light, 0.5),
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
    textInvalid: colors.indigo.danger.base,
    border: colors.indigo[100],
    borderHover: colors.indigo[70],
    focusBorder: colors.indigo.base,
    focusBorderInvalid: colors.indigo.danger.base,
    shadowRGBA: hexToRgba(colors.indigo.base, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.indigo.danger.base, 0.5),
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
    textInvalid: colors.lime.danger.base,
    border: colors.lime[100],
    borderHover: colors.lime[70],
    focusBorder: colors.lime.base,
    focusBorderInvalid: colors.lime.danger.base,
    shadowRGBA: hexToRgba(colors.lime.base, 0.5),
    shadowInvalidRGBA: hexToRgba(colors.lime.danger.base, 0.5),
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
