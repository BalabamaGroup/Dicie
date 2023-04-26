import colors, { hexToRgba } from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[10],
    border: colors.indigo[50],
    shadowRGBA: hexToRgba(colors.indigo[90], 0.25),
    headerBackground: colors.indigo[0],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      sendButtonBackground: colors.indigo[0],
      sendButtonIcon: colors.indigo.dark,
      message: {
        background: colors.indigo[0],
        border: colors.indigo[50],
        text: colors.indigo[80],
      },
      specialMessage: {
        background: colors.indigo.light,
        border: colors.indigo.dark,
        text: colors.indigo[80],
        guessBooAnswerIndicatorIcon: colors.indigo[80],
      },
    },
  },
  lime: {
    bodyBackground: colors.lime[10],
    border: colors.lime[50],
    shadowRGBA: hexToRgba(colors.lime[90], 0.25),
    headerBackground: colors.lime[0],
    collapsedArrowIcon: colors.lime[80],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      sendButtonBackground: colors.lime[0],
      sendButtonIcon: colors.lime.dark,
      message: {
        background: colors.lime[0],
        border: colors.lime[50],
        text: colors.lime[80],
      },
      specialMessage: {
        background: colors.lime.light,
        border: colors.lime.dark,
        text: colors.lime[80],
        guessBooAnswerIndicatorIcon: colors.lime[80],
      },
    },
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[80],
    border: colors.indigo[100],
    shadowRGBA: hexToRgba(colors.indigo[90], 0.75),
    headerBackground: colors.indigo[90],
    collapsedArrowIcon: colors.indigo[10],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      sendButtonBackground: colors.indigo[90],
      sendButtonIcon: colors.indigo.base,
      message: {
        background: colors.indigo[90],
        border: colors.indigo[100],
        text: colors.indigo[0],
      },
      specialMessage: {
        background: colors.indigo.base,
        border: colors.indigo.dark,
        text: colors.indigo[0],
        guessBooAnswerIndicatorIcon: colors.indigo[80],
      },
    },
  },
  lime: {
    bodyBackground: colors.lime[80],
    border: colors.lime[100],
    shadowRGBA: hexToRgba(colors.lime[90], 0.75),
    headerBackground: colors.lime[90],
    collapsedArrowIcon: colors.lime[10],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      sendButtonBackground: colors.lime[90],
      sendButtonIcon: colors.lime.base,
      message: {
        background: colors.lime[90],
        border: colors.lime[100],
        text: colors.lime[0],
      },
      specialMessage: {
        background: colors.lime.base,
        border: colors.lime.dark,
        text: colors.lime[80],
        guessBooAnswerIndicatorIcon: colors.lime[80],
      },
    },
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
