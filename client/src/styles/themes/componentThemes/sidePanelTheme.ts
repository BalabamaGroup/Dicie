import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[0],
    headerBackground: colors.indigo[10],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[10],
      messageText: colors.indigo[90],
      sendButtonBackground: colors.indigo[10],
      sendButtonIcon: colors.indigo[80],
    },
  },
  lime: {
    bodyBackground: colors.lime[0],
    headerBackground: colors.lime[10],
    collapsedArrowIcon: colors.lime[80],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      messageBackground: colors.lime[10],
      messageText: colors.lime[80],
      sendButtonBackground: colors.lime[10],
      sendButtonIcon: colors.lime[80],
    },
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[90],
    headerBackground: colors.indigo[80],
    collapsedArrowIcon: colors.indigo[10],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[80],
      messageText: colors.indigo[0],
      sendButtonBackground: colors.indigo[80],
      sendButtonIcon: colors.indigo[10],
    },
  },
  lime: {
    bodyBackground: colors.lime[90],
    headerBackground: colors.lime[80],
    collapsedArrowIcon: colors.lime[10],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      messageBackground: colors.lime[80],
      messageText: colors.lime[0],
      sendButtonBackground: colors.lime[80],
      sendButtonIcon: colors.lime[10],
    },
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
