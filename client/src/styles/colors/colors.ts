//prettier-ignore
const colors = {
  indigo: {
    0: '#F5F6FF', 10: '#ECEEFE',
    light: '#C0BEFF', base: '#8986F5', dark: '#3A36D8',
    50: '#B8B8CC', 60: '#76757C', 70: '#3C3B3F',
    80: '#181621', 90: '#100F16', 100: "#070609",
    success: {
      0: '#F5F6FF', 10: '#ECEEFE',
      light: '#BEFFC9', base: '#43EF5F', dark: '#16CF35',
      50: '#B8CCBB', 60: '#757C76', 70: '#3B3F3B',
      80: '#181621', 90: '#100F16', 100: "#070609",
    },
    warning: {
      0: '#F5F6FF', 10: '#ECEEFE',
      light: '#FFDFBE', base: '#EF9943', dark: '#CF7215',
      50: '#CCC2B8', 60: '#7C7875', 70: '#3F3D3B',
      80: '#181621', 90: '#100F16', 100: "#070609",
    },
    danger: {
      0: '#F5F6FF', 10: '#ECEEFE',
      light: '#FFBECA', base: '#EF4362', dark: '#C31434',
      50: '#CCB8BB', 60: '#7C7576', 70: '#3F3B3B',
      80: '#181621', 90: '#100F16', 100: "#070609",
    },
  },

  lime: {
    0: '#FFFFF5', 10: '#FCFDE5',
    light: '#FDFFBA', base: '#F1F586', dark: '#A3A90E',
    50: '#D4D9C3', 60: '#7C7B75', 70: '#373733',
    80: '#181816', 90: '#121210', 100: "#050505",
    success: {
      0: '#FFFFF5', 10: '#FCFDD9',
      light: '#CCFFBA', base: '#A4F586', dark: '#3F991E',
      50: '#C9D9C3', 60: '#777C75', 70: '#343733',
      80: '#181816', 90: '#121210', 100: "#050505",
    },
    warning: {
      0: '#FFFFF5', 10: '#FCFDD9',
      light: '#FFE3BA', base: '#F5C986', dark: '#99681E',
      50: '#D9D0C3', 60: '#7C7975', 70: '#373533',
      80: '#181816', 90: '#121210', 100: "#050505",
    },
    danger: {
      0: '#FFFFF5', 10: '#FCFDD9',
      light: '#FFBABA', base: '#F58686', dark: '#991E1E',
      50: '#D9C3C3', 60: '#7C7575', 70: '#373333',
      80: '#181816', 90: '#121210', 100: "#050505",
    },
  },
};

export const hexToRgba = (hex: string, opacity: number | string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = result ? parseInt(result[1], 16) : 0;
  const g = result ? parseInt(result[2], 16) : 0;
  const b = result ? parseInt(result[3], 16) : 0;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default colors;
