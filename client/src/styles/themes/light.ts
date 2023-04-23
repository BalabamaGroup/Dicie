import colors, { hexToRgba } from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  navbar: {
    wait: colors.indigo[80],
    go: colors.lime[80],
  },

  toast: {
    background: '#F6F6F6',
    color: '#4B4B4B',
    success: colors.indigo.success.base,
    successCircle: '#E0FFDF',
    warning: colors.indigo.warning.base,
    warningCircle: '#FFEEDE',
    error: colors.indigo.danger.base,
    errorCircle: '#FFD6DD',
    shadow: 'rgba(0, 0, 0, 0.15)',
  },

  page: {
    background: gradients.home_page_light,
    text: colors.indigo[80],

    auth: {
      background: colors.indigo[10],
      pictureBackground: colors.indigo[10],
      headerMain: colors.indigo[80],
      headerSub: colors.indigo[70],
      headerAccent: colors.indigo.base,
    },

    home: {
      defaultBackground: gradients.home_page_light,
      createRoomBackground: gradients.go_light,
      joinRoomBackground: gradients.wait_light,
      createRoomCard: {
        shadowRGBA: hexToRgba(colors.lime[90], 0.25),
        notSelectedBackground: colors.lime.base,
        notSelectedText: colors.lime[80],
        background: colors.lime[10],
        chooseGameBackground: colors.lime[0],
        text: colors.lime[80],
        border: colors.lime[50],
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        shadowRGBA: hexToRgba(colors.indigo[90], 0.25),
        notSelectedBackground: colors.indigo.base,
        notSelectedText: colors.indigo[0],
        background: colors.indigo[10],
        text: colors.indigo[80],
        border: colors.indigo[50],
        shadowHover: shadows.indigo.large,
        roomsTableBackground: colors.indigo[0],
        roomsTableUserIconFill: colors.indigo.base,
        alreadyInRoomBackdropRGBA: hexToRgba(colors.indigo[50], 0.4),
        alreadyInRoomBackground: colors.indigo[10],
        alreadyInRoomText: colors.indigo[80],
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.wait_light,
      backgroundGo: gradients.go_light,
      actionArea: {
        backgroundWait: colors.indigo[10],
        backgroundGo: colors.lime[10],
        borderWait: colors.indigo[50],
        borderGo: colors.lime[50],
        intructionTextWait: colors.indigo[80],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[80],
        secondaryLabelText: colors.lime[60],
        secondaryLabelSpanText: colors.lime.dark,
        selectPlayerWarningText: colors.indigo.warning.base,
      },
      otherPlayers: {
        backgroundWait: colors.indigo[10],
        backgroundGo: colors.lime[10],
      },
    },
    main: {
      backgroundWait: gradients.wait_light,
      backgroundGo: gradients.go_light,
      game: {
        backgroundWait: colors.indigo[10],
        backgroundGo: colors.lime[10],
        borderWait: colors.indigo[50],
        borderGo: colors.lime[50],
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.25),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.25),
        answerVisualizerDefaultWait: colors.indigo[10],
        answerVisualizerDefaultGo: colors.lime[10],
        yesWait: colors.indigo.success.base,
        noWait: colors.indigo.danger.base,
        wtfWait: colors.indigo.warning.base,
        yesGo: colors.lime.success.base,
        noGo: colors.lime.danger.base,
        wtfGo: colors.lime.warning.base,
        myTurn: {
          askGuessFormHeader: colors.lime[80],
          askGuessFormHeaderSpan: colors.lime.dark,
          guessWarning: colors.indigo.warning.base,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime[80],
          convoOthersAnswerBackground: colors.lime[0],
          convoOthersAnswerText: colors.lime[80],
          convoMyAnswerBackground: colors.lime[10],
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[10],
          myQuestionTextWriting: colors.indigo[80],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[10],
          othersAnswerBackground: colors.indigo[10],
          othersAnswerText: colors.indigo[80],
        },
      },
    },
  },

  carousel: {
    arrowWait: colors.indigo[80],
    arrowGo: colors.lime[80],
  },

  gameButton: {
    text: colors.indigo[80],
    background: 'none',
    textSelected: colors.indigo[10],
    backgroundSelected: colors.indigo.base,
    highlightBorderWait: colors.indigo[80],
    highlightBorderGo: colors.lime[80],
  },
};

export default light;
