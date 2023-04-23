import colors, { hexToRgba } from '@/styles/colors/colors';

const light = (
  mode: 'indigo' | 'lime',
  type: 'danger' | 'success' | 'warning' | undefined
) => {
  let color;
  if (type) color = colors[mode][type];
  else color = colors[mode];

  if (mode === 'indigo') {
    return {
      default: {
        background: color[0],
        text: !type ? color[80] : color.base,
        border: color[50],
        borderHover: color[60],
        shadowHoverRGBA: hexToRgba(color[60], 0.5),
      },
      primary: {
        background: color.light,
        text: color[80],
        border: color.dark,
        shadowHoverRGBA: hexToRgba(color.dark, 0.5),
      },
    };
  }

  return {
    default: {
      background: color[0],
      text: !type ? color[80] : color.base,
      border: color[50],
      borderHover: color[60],
      shadowHoverRGBA: hexToRgba(color[60], 0.5),
      backgroundActive: color.light,
    },
    primary: {
      background: color.light,
      text: color[80],
      border: color.dark,
      shadowHoverRGBA: hexToRgba(color.dark, 0.5),
    },
  };
};

const dark = (
  mode: 'indigo' | 'lime',
  type: 'danger' | 'success' | 'warning' | undefined
) => {
  let color;
  if (type) color = colors[mode][type];
  else color = colors[mode];

  if (mode === 'indigo') {
    return {
      default: {
        background: color[90],
        text: !type ? color[0] : color.base,
        border: 'transparent',
        borderHover: 'transparent',
        shadowHoverRGBA: hexToRgba(color[90], 0.5),
        borderActive: 'transparent',
      },
      primary: {
        background: color.base,
        text: color[0],
        border: 'transparent',
        shadowHoverRGBA: hexToRgba(color.base, 0.5),
        activeBorder: 'transparent',
      },
    };
  }

  return {
    default: {
      background: color[90],
      text: !type ? color[0] : color.base,
      border: 'transparent',
      borderHover: 'transparent',
      shadowHoverRGBA: hexToRgba(color[90], 0.5),
      borderActive: 'transparent',
    },
    primary: {
      background: color.base,
      text: color[80],
      border: 'transparent',
      shadowHoverRGBA: hexToRgba(color.base, 0.5),
      activeBorder: 'transparent',
    },
  };
};

const buttonTheme = {
  light,
  dark,
};

export default buttonTheme;
