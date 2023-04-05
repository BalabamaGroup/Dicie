import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
  navbar: {
    wait: colors.indigo[20],
    go: colors.lime[80],
  },

  toast: {
    background: '#222222',
    color: '#F6F6F6',
    success: colors.green.dark,
    successCircle: '#055F03',
    warning: colors.orange.dark,
    warningCircle: '#74410B',
    error: colors.red.dark,
    errorCircle: '#5A0B1A',
    shadow: 'rgba(0, 0, 0, 0.85)',
  },

  page: {
    background: gradients.no_gradient_page_bg_dark,
    text: colors.indigo[20],

    auth: {
      background: colors.indigo[80],
      pictureBackground: gradients.indigo_purple_dark.value,
      headerMain: colors.indigo[20],
      headerSub: colors.indigo[40],
      headerAccent: colors.indigo.base,
    },

    home: {
      createRoomCard: {
        defaultText: colors.lime[80],
        background: gradients.lime_green_dark,
        selectedBackground: colors.lime[100],
        chooseGameBackground: colors.lime[80],
        text: colors.lime[20],
        border: 'transparent',
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        defaultText: colors.indigo[20],
        background: gradients.indigo_purple_dark,
        selectedBackground: colors.indigo[80],
        text: colors.indigo[20],
        border: 'transparent',
        shadowHover: shadows.indigo.large,
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.indigo_purple_dark,
      backgroundGo: gradients.lime_green_dark,
      actionArea: {
        backgroundWait: colors.indigo[100],
        backgroundGo: colors.lime[100],
        intructionTextWait: colors.indigo[20],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[20],
        secondaryLabelText: colors.lime[40],
        secondaryLabelSpanText: colors.lime.base,
        selectPlayerWarningText: colors.orange.dark,
      },
      otherPlayers: {
        backgroundWait: colors.indigo[100],
        backgroundGo: colors.lime[100],
      },
    },
    main: {
      backgroundWait: gradients.indigo_purple_dark,
      backgroundGo: gradients.lime_green_dark,
      game: {
        backgroundWait: colors.indigo[100],
        backgroundGo: colors.lime[100],
        answerVisualizerDefaultWait: colors.indigo[80],
        answerVisualizerDefaultGo: colors.lime[80],
        yes: colors.green.dark,
        no: colors.red.dark,
        wtf: colors.orange.dark,
        myTurn: {
          askGuessFormHeader: colors.lime.text.light,
          guessWarning: colors.orange.dark,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime.text.dark,
          convoOthersAnswerBackground: colors.lime[80],
          convoOthersAnswerText: colors.lime.text.light,
          convoMyAnswerBackground: colors.lime[80],
          convoMyAnswerAskAgainBg: colors.lime.base,
          convoMyAnswerAskAgainText: colors.lime.text.dark,
          convoMyAnswerSkipTurnBg: colors.red.dark,
          convoMyAnswerSkipTurnText: colors.lime.text.light,
          convoMyAnswerContinueBg: colors.lime.base,
          convoMyAnswerContinueText: colors.lime.text.dark,
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[80],
          myQuestionTextWriting: colors.indigo[20],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[20],
          othersAnswerBackground: colors.indigo[100],
          othersAnswerText: colors.indigo.text.light,
        },
      },
    },
  },

  carousel: {
    arrowWait: colors.indigo[20],
    arrowGo: colors.lime.text.light,
  },

  gameButton: {
    text: colors.indigo[20],
    background: 'none',
    textSelected: colors.indigo[80],
    backgroundSelected: colors.lime.base,
  },
};

export default dark;
