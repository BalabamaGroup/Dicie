import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    tile: {
      outsideLabelText: colors.lime[80],
    },
    row: {
      background: colors.indigo[10],
      labelBackground: colors.indigo[0],
      highlightBorder: colors.indigo.base,
      mainText: colors.indigo[80],
      secondaryText: colors.indigo[70],
    },
  },
  lime: {
    tile: {
      outsideLabelText: colors.indigo[80],
    },
    row: {
      background: colors.lime[10],
      labelBackground: colors.lime[0],
      highlightBorder: colors.lime.base,
      mainText: colors.lime[80],
      secondaryText: colors.lime[70],
    },
  },
};

const dark = {
  indigo: {
    tile: {
      outsideLabelText: colors.indigo[10],
    },
    row: {
      background: colors.indigo[80],
      labelBackground: colors.indigo[90],
      highlightBorder: colors.indigo.base,
      mainText: colors.indigo[10],
      secondaryText: colors.indigo[60],
    },
  },
  lime: {
    tile: {
      outsideLabelText: colors.lime[0],
    },
    row: {
      background: colors.lime[80],
      labelBackground: colors.lime[90],
      highlightBorder: colors.lime.base,
      mainText: colors.lime[10],
      secondaryText: colors.lime[60],
    },
  },
};

const playerTheme = {
  light,
  dark,
};

export default playerTheme;
