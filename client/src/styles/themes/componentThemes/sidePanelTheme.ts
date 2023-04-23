import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[10],
    headerBackground: colors.indigo[0],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[0],
      messageText: colors.indigo[80],
      sendButtonBackground: colors.indigo[0],
      sendButtonIcon: colors.indigo.dark,
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
      sendButtonIcon: colors.lime.dark,
    },
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[80],
    headerBackground: colors.indigo[90],
    collapsedArrowIcon: colors.indigo[10],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[90],
      messageText: colors.indigo[0],
      sendButtonBackground: colors.indigo[90],
      sendButtonIcon: colors.indigo.base,
    },
  },
  lime: {
    bodyBackground: colors.lime[80],
    headerBackground: colors.lime[90],
    collapsedArrowIcon: colors.lime[10],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      messageBackground: colors.lime[90],
      messageText: colors.lime[0],
      sendButtonBackground: colors.lime[90],
      sendButtonIcon: colors.lime.base,
    },
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
