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

  authPage: {
    background: colors.indigo[10],
    pictureBackground: 'linear-gradient(180deg, #DAD9FF 0%, #E8D0FF 100%);',
    headerMain: colors.indigo[80],
    headerSub: colors.indigo[70],
    headerAccent: colors.indigo.base,
  },

  homePage: {
    defaultBackground: gradients.home_page_light,
    createRoomBackground: gradients.go_light,
    joinRoomBackground: gradients.wait_light,
    createRoomCard: {
      background: colors.lime[10],
      border: colors.lime[50],
      text: colors.lime[80],
      shadowRGBA: hexToRgba(colors.lime[90], 0.25),
      default: {
        background: colors.lime.base,
        text: colors.lime[80],
        border: colors.lime.dark,
        shadowHoverRGBA: hexToRgba(colors.lime.base, 0.75),
      },
      notSelected: {
        arrow: colors.lime.dark,
      },
      selected: {
        setupRoomBackground: colors.lime[10],
        chooseGameBackground: colors.lime[0],
      },
    },
    joinRoomCard: {
      background: colors.indigo[10],
      border: colors.indigo[50],
      text: colors.indigo[80],
      shadowRGBA: hexToRgba(colors.indigo[90], 0.25),
      default: {
        background: colors.indigo.base,
        text: colors.indigo[0],
        border: colors.indigo.dark,
        shadowHoverRGBA: hexToRgba(colors.indigo.base, 0.75),
      },
      notSelected: {
        arrow: colors.indigo.dark,
      },
      selected: {
        roomsTable: {
          background: colors.indigo[0],
          userIconFill: colors.indigo.base,
        },
        alreadyInRoom: {
          backdropRGBA: hexToRgba(colors.indigo[50], 0.4),
          shadowRGBA: hexToRgba(colors.indigo[80], 0.25),
          background: colors.indigo[10],
          text: colors.indigo[80],
        },
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.wait_light,
      backgroundGo: gradients.go_light,
      actionArea: {
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.25),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.25),
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
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.25),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.25),
        backgroundWait: colors.indigo[0],
        backgroundGo: colors.lime[0],
        borderWait: colors.indigo[50],
        borderGo: colors.lime[50],
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
        playersCarousel: {
          backgroundWait: colors.indigo[0],
          backgroundGo: colors.lime[0],
          borderWait: colors.indigo[50],
          borderGo: colors.lime[50],
        },
        answerVisualizerDefaultWait: colors.indigo[0],
        answerVisualizerDefaultGo: colors.lime[0],
        yesWait: colors.indigo.success.light,
        noWait: colors.indigo.danger.light,
        wtfWait: colors.indigo.warning.light,
        yesGo: colors.lime.success.light,
        noGo: colors.lime.danger.light,
        wtfGo: colors.lime.warning.light,
        yesWaitBorder: colors.indigo.success.dark,
        noWaitBorder: colors.indigo.danger.dark,
        wtfWaitBorder: colors.indigo.warning.dark,
        yesGoBorder: colors.lime.success.dark,
        noGoBorder: colors.lime.danger.dark,
        wtfGoBorder: colors.lime.warning.dark,
        winGame: {
          backdropRGBA: hexToRgba(colors.indigo[50], 0.4),
          shadowRGBA: hexToRgba(colors.indigo[80], 0.25),
        },
        myTurn: {
          askGuessForm: {
            header: colors.lime[80],
            span: colors.lime.dark,
            guessWarning: colors.indigo.warning.base,
          },
          convo: {
            myQuestion: {
              background: colors.lime.light,
              border: colors.lime.dark,
              text: colors.lime[80],
            },
            othersAnswer: {
              background: colors.lime[10],
              border: colors.lime[50],
              textLoading: colors.lime[80],
              text: colors.lime[80],
            },
            myNextMove: {
              background: colors.lime[10],
              border: colors.lime[50],
            },
          },
        },
        othersTurn: {
          othersQuestion: {
            loading: {
              background: colors.indigo[0],
              border: colors.indigo[50],
              text: colors.indigo[80],
            },
            asked: {
              background: colors.indigo.light,
              border: colors.indigo.dark,
              text: colors.indigo[80],
            },
          },
          myAnswer: {
            background: colors.indigo[10],
            text: colors.indigo[80],
          },
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
