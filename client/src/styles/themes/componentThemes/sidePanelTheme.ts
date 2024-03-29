import colors, { hexToRgba } from '@/styles/colors/colors';

const light = {
  indigo: {
    bodyBackground: colors.indigo[10],
    collapsedBackground: colors.lime[0],
    border: colors.indigo[50],
    shadowRGBA: hexToRgba(colors.indigo[90], 0.25),
    headerBackground: colors.indigo[0],
    collapsedArrowIcon: colors.indigo[80],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      sendButtonBackground: colors.indigo[0],
      sendButtonIcon: colors.indigo.dark,
      noMessageText: colors.indigo[60],
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
    guessBooAnswers: {
      text: colors.indigo[80],
      bottomBorder: colors.indigo[50],
      iconFill: colors.indigo[80],
    },
    notes: {
      background: colors.indigo[0],
      text: colors.indigo[80],
      border: colors.indigo[50],
      borderHover: colors.indigo[60],
      borderActive: colors.indigo.dark,
      scroll: {
        background: colors.indigo[10],
        thumb: colors.indigo[50],
      },
    },
  },
  lime: {
    bodyBackground: colors.lime[10],
    collapsedBackground: colors.lime[0],
    border: colors.lime[50],
    shadowRGBA: hexToRgba(colors.lime[90], 0.25),
    headerBackground: colors.lime[0],
    collapsedArrowIcon: colors.lime[80],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      sendButtonBackground: colors.lime[0],
      sendButtonIcon: colors.lime.dark,
      noMessageText: colors.lime[60],
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
    guessBooAnswers: {
      text: colors.lime[80],
      bottomBorder: colors.lime[50],
      iconFill: colors.lime[80],
    },
    notes: {
      background: colors.lime[0],
      text: colors.lime[80],
      border: colors.lime[50],
      borderHover: colors.lime[60],
      borderActive: colors.lime.dark,
      scroll: {
        background: colors.lime[10],
        thumb: colors.lime[50],
      },
    },
  },
};

const dark = {
  indigo: {
    bodyBackground: colors.indigo[80],
    collapsedBackground: colors.indigo[90],
    border: colors.indigo[100],
    shadowRGBA: hexToRgba(colors.indigo[90], 0.75),
    headerBackground: colors.indigo[90],
    collapsedArrowIcon: colors.indigo[10],
    backdrop: 'rgba(24, 22, 33, 0.5);',
    chat: {
      sendButtonBackground: colors.indigo[90],
      sendButtonIcon: colors.indigo.base,
      noMessageText: colors.indigo[60],
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
    guessBooAnswers: {
      text: colors.indigo[0],
      bottomBorder: colors.indigo[100],
      iconFill: colors.indigo[80],
    },
    notes: {
      background: colors.indigo[90],
      text: colors.indigo[0],
      border: colors.indigo[100],
      borderHover: colors.indigo[70],
      borderActive: colors.indigo.base,
      scroll: {
        background: colors.indigo[80],
        thumb: colors.indigo[70],
      },
    },
  },
  lime: {
    bodyBackground: colors.lime[80],
    collapsedBackground: colors.lime[90],
    border: colors.lime[100],
    shadowRGBA: hexToRgba(colors.lime[90], 0.75),
    headerBackground: colors.lime[90],
    collapsedArrowIcon: colors.lime[10],
    backdrop: 'rgba(33, 22, 22, 0.5)',
    chat: {
      sendButtonBackground: colors.lime[90],
      sendButtonIcon: colors.lime.base,
      noMessageText: colors.lime[60],
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
    guessBooAnswers: {
      text: colors.lime[0],
      bottomBorder: colors.lime[100],
      iconFill: colors.lime[80],
    },
    notes: {
      background: colors.lime[90],
      text: colors.lime[0],
      border: colors.lime[100],
      borderHover: colors.lime[70],
      borderActive: colors.lime.base,
      scroll: {
        background: colors.lime[80],
        thumb: colors.lime[70],
      },
    },
  },
};

const sidePanelTheme = {
  light,
  dark,
};

export default sidePanelTheme;
