import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[0],
    headerBackground: colors.indigo[20],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[20],
      messageText: colors.indigo.text.dark,
      sendButtonBackground: colors.indigo[20],
      sendButtonIcon: colors.indigo[80],
    },
  },
  lime: {
    bodyBackground: colors.lime[0],
    headerBackground: colors.lime[20],
    collapsedArrowIcon: colors.lime[80],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      messageBackground: colors.lime[20],
      messageText: colors.lime.text.dark,
      sendButtonBackground: colors.lime[20],
      sendButtonIcon: colors.lime[80],
    },
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[100],
    headerBackground: colors.indigo[80],
    collapsedArrowIcon: colors.indigo[20],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      messageBackground: colors.indigo[80],
      messageText: colors.indigo.text.light,
      sendButtonBackground: colors.indigo[80],
      sendButtonIcon: colors.indigo[20],
    },
  },
  lime: {
    bodyBackground: colors.lime[100],
    headerBackground: colors.lime[80],
    collapsedArrowIcon: colors.lime[20],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      messageBackground: colors.lime[80],
      messageText: colors.lime.text.light,
      sendButtonBackground: colors.lime[80],
      sendButtonIcon: colors.lime[20],
    },
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
