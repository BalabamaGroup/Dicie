import colors, { hexToRgba } from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
  navbar: {
    wait: colors.indigo[10],
    go: colors.lime[80],
  },

  toast: {
    background: '#222222',
    color: '#F6F6F6',
    success: colors.indigo.success.base,
    successCircle: '#055F03',
    warning: colors.indigo.warning.base,
    warningCircle: '#74410B',
    error: colors.indigo.danger.base,
    errorCircle: '#5A0B1A',
    shadow: 'rgba(0, 0, 0, 0.85)',
  },

  page: {
    background: gradients.home_page_dark,
    text: colors.indigo[10],

    auth: {
      background: colors.indigo[80],
      pictureBackground: colors.indigo[80],
      headerMain: colors.indigo[10],
      headerSub: colors.indigo[60],
      headerAccent: colors.indigo.base,
    },

    home: {
      defaultBackground: gradients.home_page_dark,
      createRoomBackground: gradients.go_dark,
      joinRoomBackground: gradients.wait_dark,
      createRoomCard: {
        shadowRGBA: hexToRgba(colors.lime[90], 0.75),
        notSelectedBackground: colors.lime.base,
        notSelectedText: colors.lime[80],
        background: colors.lime[80],
        text: colors.lime[0],
        chooseGameBackground: colors.lime[90],
        border: 'transparent',
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        shadowRGBA: hexToRgba(colors.indigo[90], 0.75),
        notSelectedBackground: colors.indigo.base,
        notSelectedText: colors.indigo[10],
        background: colors.indigo[80],
        text: colors.indigo[0],
        border: 'transparent',
        shadowHover: shadows.indigo.large,
        roomsTableBackground: colors.indigo[90],
        roomsTableUserIconFill: colors.indigo.light,
        alreadyInRoomBackdropRGBA: hexToRgba(colors.indigo[90], 0.4),
        alreadyInRoomBackground: colors.indigo[80],
        alreadyInRoomText: colors.indigo[0],
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.wait_dark,
      backgroundGo: gradients.go_dark,
      actionArea: {
        backgroundWait: colors.indigo[80],
        backgroundGo: colors.lime[80],
        intructionTextWait: colors.indigo[0],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[0],
        secondaryLabelText: colors.lime[60],
        secondaryLabelSpanText: colors.lime.base,
        selectPlayerWarningText: colors.indigo.warning.base,
      },
      otherPlayers: {
        backgroundWait: colors.indigo[90],
        backgroundGo: colors.lime[90],
      },
    },
    main: {
      backgroundWait: gradients.wait_dark,
      backgroundGo: gradients.go_dark,
      game: {
        backgroundWait: colors.indigo[80],
        backgroundGo: colors.lime[80],
        borderWait: 'transparent',
        borderGo: 'transparent',
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.75),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.75),
        answerVisualizerDefaultWait: colors.indigo[80],
        answerVisualizerDefaultGo: colors.lime[80],
        yesWait: colors.indigo.success.base,
        noWait: colors.indigo.danger.base,
        wtfWait: colors.indigo.warning.base,
        yesGo: colors.lime.success.base,
        noGo: colors.lime.danger.base,
        wtfGo: colors.lime.warning.base,
        myTurn: {
          askGuessFormHeader: colors.lime[0],
          askGuessFormHeaderSpan: colors.lime.base,
          guessWarning: colors.indigo.warning.base,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime[90],
          convoOthersAnswerBackground: colors.lime[90],
          convoOthersAnswerText: colors.lime[0],
          convoMyAnswerBackground: colors.lime[90],
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[90],
          myQuestionTextWriting: colors.indigo[10],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[10],
          othersAnswerBackground: colors.indigo[80],
          othersAnswerText: colors.indigo[0],
        },
      },
    },
  },

  carousel: {
    arrowWait: colors.indigo[10],
    arrowGo: colors.lime[0],
  },

  gameButton: {
    text: colors.indigo[10],
    background: 'none',
    textSelected: colors.indigo[80],
    backgroundSelected: colors.lime.base,
  },
};

export default dark;
