import colors from '../colors/colors';
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
    success: colors.green.dark,
    successCircle: '#055F03',
    warning: colors.orange.dark,
    warningCircle: '#74410B',
    error: colors.red.dark,
    errorCircle: '#5A0B1A',
    shadow: 'rgba(0, 0, 0, 0.85)',
  },

  page: {
    background: gradients.home_page_dark,
    text: colors.indigo[10],

    auth: {
      background: colors.indigo[80],
      pictureBackground: gradients.indigo_purple_dark.value,
      headerMain: colors.indigo[10],
      headerSub: colors.indigo[60],
      headerAccent: colors.indigo.base,
    },

    home: {
      defaultBackground: gradients.home_page_dark.value,
      createRoomBackground: colors.lime.base,
      joinRoomBackground: colors.indigo.base,
      createRoomCard: {
        notSelectedBackground: colors.lime.base,
        notSelectedText: colors.lime[80],
        background: colors.lime[80],
        text: colors.lime[10],
        chooseGameBackground: colors.lime[90],
        border: 'transparent',
        shadowHover: shadows.lime.large,
      },
      joinRoomCard: {
        notSelectedBackground: colors.indigo.base,
        notSelectedText: colors.indigo[10],
        background: colors.indigo[80],
        text: colors.indigo[10],
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
        backgroundWait: colors.indigo[90],
        backgroundGo: colors.lime[90],
        intructionTextWait: colors.indigo[10],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[10],
        secondaryLabelText: colors.lime[60],
        secondaryLabelSpanText: colors.lime.base,
        selectPlayerWarningText: colors.orange.dark,
      },
      otherPlayers: {
        backgroundWait: colors.indigo[90],
        backgroundGo: colors.lime[90],
      },
    },
    main: {
      backgroundWait: gradients.indigo_purple_dark,
      backgroundGo: gradients.lime_green_dark,
      game: {
        backgroundWait: colors.indigo[90],
        backgroundGo: colors.lime[90],
        answerVisualizerDefaultWait: colors.indigo[80],
        answerVisualizerDefaultGo: colors.lime[80],
        yes: colors.green.dark,
        no: colors.red.dark,
        wtf: colors.orange.dark,
        myTurn: {
          askGuessFormHeader: colors.lime[0],
          guessWarning: colors.orange.dark,
          convoMyQuestionBackground: colors.lime.base,
          convoMyQuestionText: colors.lime[80],
          convoOthersAnswerBackground: colors.lime[80],
          convoOthersAnswerText: colors.lime[0],
          convoMyAnswerBackground: colors.lime[80],
          convoMyAnswerAskAgainBg: colors.lime.base,
          convoMyAnswerAskAgainText: colors.lime[80],
          convoMyAnswerSkipTurnBg: colors.red.dark,
          convoMyAnswerSkipTurnText: colors.lime[0],
          convoMyAnswerContinueBg: colors.lime.base,
          convoMyAnswerContinueText: colors.lime[80],
        },
        othersTurn: {
          myQuestionBackgroundWriting: colors.indigo[80],
          myQuestionTextWriting: colors.indigo[10],
          myQuestionBackgroundAsked: colors.indigo.base,
          myQuestionTextAsked: colors.indigo[10],
          othersAnswerBackground: colors.indigo[90],
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
