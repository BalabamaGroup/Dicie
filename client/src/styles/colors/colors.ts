//prettier-ignore
const colors = {
  indigo: {
    0: '#F5F6FF', 10: '#ECEEFE',
    light: '#C0BEFF', base: '#8986F5', dark: '#3A36D8',
    50: '#B8B8CC', 60: '#76757C', 70: '#3C3B3F',
    80: '#181621', 90: '#100F16',
    success: {
      0: '#F5FFF7', 10: '#ECFEEF',
      light: '#BEFFC9', base: '#43EF5F', dark: '#16CF35',
      50: '#B8CCBB', 60: '#757C76', 70: '#3B3F3B',
      80: '#162118', 90: '#0F1610',
    },
    warning: {
      0: '#FFFAF5', 10: '#FEF5EC',
      light: '#FFDFBE', base: '#EF9943', dark: '#CF7215',
      50: '#CCC2B8', 60: '#7C7875', 70: '#3F3D3B',
      80: '#211C16', 90: '#16130F',
    },
    danger: {
      0: '#FFF5F7', 10: '#FEECEF',
      light: '#FFBECA', base: '#EF4362', dark: '#C31434',
      50: '#CCB8BB', 60: '#7C7576', 70: '#3F3B3B',
      80: '#211618', 90: '#160F10',
    },
  },

  lime: {
    0: '#FFFFF5', 10: '#FCFDD9',
    light: '#FDFFBA', base: '#F1F586', dark: '#A3A90E',
    50: '#D4D9C3', 60: '#7C7B75', 70: '#373733',
    80: '#181816', 90: '#121210',
    success: {
      0: '#F8FFF5', 10: '#E3FDD9',
      light: '#CCFFBA', base: '#A4F586', dark: '#3F991E',
      50: '#C9D9C3', 60: '#777C75', 70: '#343733',
      80: '#161816', 90: '#101210',
    },
    warning: {
      0: '#FFFBF5', 10: '#FDEFD9',
      light: '#FFE3BA', base: '#F5C986', dark: '#99681E',
      50: '#D9D0C3', 60: '#7C7975', 70: '#373533',
      80: '#181716', 90: '#121110',
    },
    danger: {
      0: '#FFF5F5', 10: '#FDD9D9',
      light: '#FFBABA', base: '#F58686', dark: '#991E1E',
      50: '#D9C3C3', 60: '#7C7575', 70: '#373333',
      80: '#181616', 90: '#121010',
    },
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
