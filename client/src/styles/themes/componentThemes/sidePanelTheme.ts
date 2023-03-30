import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[0],
    headerBackground: colors.indigo[20],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
  },
  lime: {
    bodyBackground: colors.lime[0],
    headerBackground: colors.lime[20],
    collapsedArrowIcon: colors.lime[80],
    backdrop: 'rgba(33, 22, 22, 0.5)',
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[100],
    headerBackground: colors.indigo[80],
    collapsedArrowIcon: colors.indigo[20],
    backdrop: 'rgba(24, 22, 33, 0.5);',
  },
  lime: {
    bodyBackground: colors.lime[100],
    headerBackground: colors.lime[80],
    collapsedArrowIcon: colors.lime[20],
    backdrop: 'rgba(33, 22, 22, 0.5)',
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
