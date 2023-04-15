import colors from '../colors/colors';
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
    success: colors.green.dark,
    successCircle: '#E0FFDF',
    warning: colors.orange.dark,
    warningCircle: '#FFEEDE',
    error: colors.red.dark,
    errorCircle: '#FFD6DD',
    shadow: 'rgba(0, 0, 0, 0.15)',
  },

  page: {
    background: gradients.home_page_light,
    text: colors.indigo[80],

    auth: {
      background: colors.indigo[10],
      pictureBackground: gradients.indigo_purple_light.value,
      headerMain: colors.indigo[80],
      headerSub: colors.indigo[70],
      headerAccent: colors.indigo.base,
    },

    home: {
      defaultBackground: gradients.home_page_light.value,
      createRoomBackground: colors.lime.base,
      joinRoomBackground: colors.indigo.base,
      createRoomCard: {
        notSelectedBackground: colors.lime.base,
        notSelectedText: colors.lime[80],
        background: colors.lime[10],
        chooseGameBackground: colors.lime[10],
        text: colors.lime[80],
        border: colors.lime[50],
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        notSelectedBackground: colors.indigo.base,
        notSelectedText: colors.indigo[80],
        background: colors.indigo[10],
        text: colors.indigo[80],
        border: colors.indigo[50],
        shadowHover: shadows.indigo.large,
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.indigo_purple_light,
      backgroundGo: gradients.lime_green_light,
      actionArea: {
        backgroundWait: colors.indigo[10],
        backgroundGo: colors.lime[0],
        intructionText: colors.lime[90],

        intructionTextWait: colors.indigo[80],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[80],

        secondaryLabelText: colors.lime[70],
        secondaryLabelSpanText: colors.lime[90],
        selectPlayerWarningText: colors.orange.dark,
      },
      otherPlayers: {
        backgroundWait: colors.indigo[0],
        backgroundGo: colors.lime[0],
      },
    },
    main: {
      backgroundWait: gradients.indigo_purple_light,
      backgroundGo: gradients.lime_green_light,
      game: {
        backgroundWait: colors.indigo[0],
        backgroundGo: colors.lime[0],
        answerVisualizerDefaultWait: colors.indigo[10],
        answerVisualizerDefaultGo: colors.lime[10],
        yes: colors.green.light,
        no: colors.red.light,
        wtf: colors.orange.light,
        myTurn: {
          askGuessFormHeader: colors.lime[80],
          guessWarning: colors.orange.dark,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime[80],

          convoOthersAnswerBackground: colors.lime[10],
          convoOthersAnswerText: colors.lime[80],

          convoMyAnswerBackground: colors.lime[10],
          convoMyAnswerAskAgainBg: colors.lime.base,
          convoMyAnswerAskAgainText: colors.lime[80],
          convoMyAnswerSkipTurnBg: colors.red.dark,
          convoMyAnswerSkipTurnText: colors.lime[0],
          convoMyAnswerContinueBg: colors.lime.base,
          convoMyAnswerContinueText: colors.lime[80],
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[10],
          myQuestionTextWriting: colors.indigo[80],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[10],
          othersAnswerBackground: colors.indigo[0],
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
