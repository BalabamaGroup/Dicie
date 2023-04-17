import colors, { hexToRgba } from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

const light = {
  indigo: {
    default: {
      background: colors.indigo[0],
      text: colors.indigo[80],
      border: colors.indigo[50],
      borderHover: colors.indigo[60],
      shadowHoverRGBA: hexToRgba(colors.indigo[60], 0.5),
      borderActive: colors.indigo.dark,
    },
    primary: {
      background: colors.indigo.base,
      text: colors.indigo[0],
      border: colors.indigo.dark,
      shadowHoverRGBA: hexToRgba(colors.indigo.dark, 0.5),
    },
  },
  lime: {
    default: {
      background: colors.lime[0],
      text: colors.lime[80],
      border: colors.lime[50],
      borderHover: colors.lime[60],
      shadowHoverRGBA: hexToRgba(colors.lime[60], 0.5),
      backgroundActive: colors.lime.light,
    },
    primary: {
      background: colors.lime.base,
      text: colors.lime[80],
      border: colors.lime.dark,
      shadowHoverRGBA: hexToRgba(colors.lime.dark, 0.5),
    },
  },
};

const dark = {
  indigo: {
    default: {
      background: colors.indigo[90],
      text: colors.indigo[0],
      border: 'transparent',
      borderHover: 'transparent',
      shadowHoverRGBA: hexToRgba(colors.indigo[90], 0.5),
      borderActive: 'transparent',
    },
    primary: {
      background: colors.indigo.base,
      text: colors.indigo[0],
      border: 'transparent',
      shadow: shadows.indigo.medium,
      shadowHoverRGBA: hexToRgba(colors.indigo.base, 0.5),
      activeBorder: 'transparent',
    },
  },
  lime: {
    default: {
      background: colors.lime[90],
      text: colors.lime[0],
      border: 'transparent',
      borderHover: 'transparent',
      shadowHoverRGBA: hexToRgba(colors.lime[90], 0.5),
      borderActive: 'transparent',
    },
    primary: {
      background: colors.lime.base,
      text: colors.lime[80],
      border: 'transparent',
      shadow: shadows.lime.medium,
      shadowHoverRGBA: hexToRgba(colors.lime.base, 0.5),
      activeBorder: 'transparent',
    },
  },
};

const buttonTheme = {
  light,
  dark,
};

export default buttonTheme;
