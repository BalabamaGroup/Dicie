const colors = {
  green: {
    light: '#AAE8A9',
    dark: '#59DE56',
  },
  orange: {
    light: '#FFD9B1',
    dark: '#F39A3A',
  },
  red: {
    light: '#FF95A9',
    dark: '#FC3057',
  },

  indigo: {
    0: '#F5F6FF',
    10: '#ECEEFE',
    light: '#C0BEFF',
    base: '#8986F5',
    dark: '#3A36D8',
    50: '#B8B8CC',
    60: '#76757C',
    70: '#3C3B3F',
    80: '#181621',
    90: '#100F16',
  },

  lime: {
    0: '#FFFFF5',
    10: '#FCFDD9',
    light: '#FDFFBA',
    base: '#F1F586',
    dark: '#A3A90E',
    50: '#D4D9C3',
    60: '#7C7B75',
    70: '#373733',
    80: '#181816',
    90: '#121210',
  },
};

export const hexToRgba = (hex: string, opacity: number | string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = result ? parseInt(result[1], 16) : 255;
  const g = result ? parseInt(result[2], 16) : 0;
  const b = result ? parseInt(result[3], 16) : 0;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default colors;
