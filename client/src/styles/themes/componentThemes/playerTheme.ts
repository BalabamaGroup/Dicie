import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    tile: {
      outsideLabelText: colors.lime[80],
    },
    row: {
      background: colors.indigo[20],
      labelBackground: colors.indigo[0],
      highlightBorder: colors.indigo.base,
      mainText: colors.indigo[80],
      secondaryText: colors.indigo[60],
    },
  },
  lime: {
    tile: {
      outsideLabelText: colors.indigo[80],
    },
    row: {
      background: colors.lime[20],
      labelBackground: colors.lime[0],
      highlightBorder: colors.lime.base,
      mainText: colors.lime[80],
      secondaryText: colors.lime[60],
    },
  },
};

const dark = {
  indigo: {
    tile: {
      outsideLabelText: colors.indigo[20],
    },
    row: {
      background: colors.indigo[80],
      labelBackground: colors.indigo[100],
      highlightBorder: colors.indigo.base,
      mainText: colors.indigo[20],
      secondaryText: colors.indigo[40],
    },
  },
  lime: {
    tile: {
      outsideLabelText: colors.lime.text.light,
    },
    row: {
      background: colors.lime[80],
      labelBackground: colors.lime[100],
      highlightBorder: colors.lime.base,
      mainText: colors.lime[20],
      secondaryText: colors.lime[40],
    },
  },
};

const playerTheme = {
  light,
  dark,
};

export default playerTheme;
