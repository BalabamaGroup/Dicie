import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  navbar: {
    wait: colors.indigo[80],
    go: colors.lime[80],
  },

  page: {
    background: gradients.no_gradient_page_bg_light,
    text: colors.indigo[80],

    auth: {
      background: colors.indigo[20],
      pictureBackground: gradients.indigo_purple_light.value,
      headerMain: colors.indigo[80],
      headerSub: colors.indigo[60],
      headerAccent: colors.indigo.base,
    },

    home: {
      createRoomCard: {
        defaultText: colors.indigo[80],
        background: gradients.lime_green_light,
        selectedBackground: colors.lime[0],
        chooseGameBackground: colors.lime[20],
        text: colors.lime[80],
        border: colors.lime.base,
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        defaultText: colors.indigo[80],
        text: colors.indigo[80],
        background: gradients.indigo_purple_light,
        selectedBackground: colors.indigo[20],
        border: colors.indigo.base,
        shadowHover: shadows.indigo.large,
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.indigo_purple_light,
      backgroundGo: gradients.lime_green_light,
      actionArea: {
        backgroundWait: colors.indigo[20],
        backgroundGo: colors.lime[0],
        intructionText: colors.lime[100],

        intructionTextWait: colors.indigo[80],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[80],

        secondaryLabelText: colors.lime[60],
        secondaryLabelSpanText: colors.lime[100],
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
        answerVisualizerDefaultWait: colors.indigo[20],
        answerVisualizerDefaultGo: colors.lime[20],
        yes: colors.green.light,
        no: colors.red.light,
        wtf: colors.orange.light,
        myTurn: {
          askGuessFormHeader: colors.lime[80],
          guessWarning: colors.orange.dark,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime.text.dark,

          convoOthersAnswerBackground: colors.lime[20],
          convoOthersAnswerText: colors.lime.text.dark,

          convoMyAnswerBackground: colors.lime[20],
          convoMyAnswerAskAgainBg: colors.lime.base,
          convoMyAnswerAskAgainText: colors.lime.text.dark,
          convoMyAnswerSkipTurnBg: colors.red.dark,
          convoMyAnswerSkipTurnText: colors.lime.text.light,
          convoMyAnswerContinueBg: colors.lime.base,
          convoMyAnswerContinueText: colors.lime.text.dark,
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[20],
          myQuestionTextWriting: colors.indigo[80],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[20],
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
    textSelected: colors.indigo[20],
    backgroundSelected: colors.indigo.base,
    highlightBorderWait: colors.indigo[80],
    highlightBorderGo: colors.lime[80],
  },
};

export default light;
