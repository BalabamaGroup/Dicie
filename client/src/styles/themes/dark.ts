import colors, { hexToRgba } from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
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

  authPage: {
    background: colors.indigo[80],
    pictureBackground: 'linear-gradient(180deg, #8986F5 0%, #BE86F5 100%)',
    headerMain: colors.indigo[10],
    headerSub: colors.indigo[60],
    headerAccent: colors.indigo.base,
  },

  homePage: {
    defaultBackground: gradients.home_page_dark,
    createRoomBackground: gradients.go_dark,
    joinRoomBackground: gradients.wait_dark,
    createRoomCard: {
      background: colors.lime[80],
      border: colors.lime[100],
      text: colors.lime[0],
      shadowRGBA: hexToRgba(colors.lime[100], 0.75),
      default: {
        background: colors.lime.base,
        text: colors.lime[80],
        border: colors.lime.dark,
        shadowHoverRGBA: hexToRgba(colors.lime.base, 0.75),
      },
      notSelected: {
        arrow: colors.lime.base,
      },
      selected: {
        setupRoomBackground: colors.lime[80],
        chooseGameBackground: colors.lime[90],
      },
    },
    joinRoomCard: {
      background: colors.indigo[80],
      border: colors.indigo[100],
      text: colors.indigo[0],
      shadowRGBA: hexToRgba(colors.indigo[90], 0.75),
      default: {
        background: colors.indigo.base,
        text: colors.indigo[0],
        border: colors.indigo.dark,
        shadowHoverRGBA: hexToRgba(colors.indigo.base, 0.75),
      },
      notSelected: {
        arrow: colors.indigo.base,
      },
      selected: {
        roomsTable: {
          background: colors.indigo[90],
          userIconFill: colors.indigo.light,
        },
        alreadyInRoom: {
          text: colors.indigo[0],
          backdropRGBA: hexToRgba(colors.indigo[90], 0.4),
          shadowRGBA: hexToRgba(colors.indigo[100], 0.75),
          background: colors.indigo[80],
        },
      },
    },
  },

  guessBooGame: {
    setup: {
      backgroundWait: gradients.wait_dark,
      backgroundGo: gradients.go_dark,
      actionArea: {
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.75),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.75),
        backgroundWait: colors.indigo[80],
        backgroundGo: colors.lime[80],
        borderWait: colors.indigo[100],
        borderGo: colors.lime[100],
        intructionTextWait: colors.indigo[0],
        intructionSpanTextWait: colors.indigo.base,
        intructionTextGo: colors.lime[0],
        secondaryLabelText: colors.lime[60],
        secondaryLabelSpanText: colors.lime.base,
        selectPlayerWarningText: colors.indigo.warning.base,
      },
      otherPlayers: {
        shadowGoRGBA: hexToRgba(colors.lime[90], 0.75),
        shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.75),
        backgroundWait: colors.indigo[90],
        backgroundGo: colors.lime[90],
        borderWait: colors.indigo[100],
        borderGo: colors.lime[100],
      },
    },
    main: {
      backgroundWait: gradients.wait_dark,
      backgroundGo: gradients.go_dark,
      game: {
        backgroundWait: colors.indigo[80],
        backgroundGo: colors.lime[80],
        borderWait: colors.indigo[100],
        borderGo: colors.lime[100],
        playersCarousel: {
          backgroundWait: colors.indigo[90],
          backgroundGo: colors.lime[90],
          borderWait: colors.indigo[100],
          borderGo: colors.lime[100],
        },
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
        yesWaitBorder: colors.indigo.success.dark,
        noWaitBorder: colors.indigo.danger.dark,
        wtfWaitBorder: colors.indigo.warning.dark,
        yesGoBorder: colors.lime.success.dark,
        noGoBorder: colors.lime.danger.dark,
        wtfGoBorder: colors.lime.warning.dark,
        winGame: {
          backdropRGBA: hexToRgba(colors.indigo[90], 0.4),
          shadowRGBA: hexToRgba(colors.indigo[100], 0.75),
        },
        myTurn: {
          askGuessForm: {
            header: colors.lime[0],
            span: colors.lime.base,
            guessWarning: colors.indigo.warning.base,
          },
          convo: {
            myQuestion: {
              background: colors.lime.base,
              border: colors.lime.dark,
              text: colors.lime[90],
            },
            othersAnswer: {
              background: colors.lime[80],
              border: colors.lime[100],
              textLoading: colors.lime[0],
              text: colors.lime[80],
            },
            myNextMove: {
              background: colors.lime[80],
              border: colors.lime[100],
            },
          },
        },
        othersTurn: {
          othersQuestion: {
            loading: {
              background: colors.indigo[90],
              border: colors.indigo[100],
              text: colors.indigo[10],
            },
            asked: {
              background: colors.indigo.base,
              border: colors.indigo.dark,
              text: colors.indigo[10],
            },
          },
          myAnswer: {
            background: colors.indigo[80],
            text: colors.indigo[0],
          },
        },
      },
    },
  },

  memetaurGame: {
    backgroundWait: gradients.wait_dark,
    backgroundGo: gradients.go_dark,
    game: {
      backgroundWait: colors.indigo[80],
      backgroundGo: colors.lime[80],
      borderWait: colors.indigo[100],
      borderGo: colors.lime[100],
      shadowWaitRGBA: hexToRgba(colors.indigo[90], 0.75),
      shadowGoRGBA: hexToRgba(colors.lime[90], 0.75),

      captionSetup: {
        myTurn: {
          header: {
            textMain: colors.lime[0],
            textSub: colors.lime[60],
          },
          presets: {
            background: colors.lime[90],
            border: colors.lime[100],
            preset: {
              text: colors.lime[0],
              background: colors.lime[90],
              backgroundHover: colors.lime[100],
            },
          },
        },
        othersTurn: {
          textHeader: colors.indigo[0],
          textWaitMessage: colors.indigo[0],
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
    highlightBorderWait: colors.indigo[10],
    highlightBorderGo: colors.lime[10],
  },
};

export default dark;
