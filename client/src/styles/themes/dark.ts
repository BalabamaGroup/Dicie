import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
  name: 'dark',

  navbar: {
    default: 'lime',
    indigo: {
      light: colors.indigo[20],
      dark: colors.indigo[80],
    },
    lime: {
      light: colors.lime[20],
      dark: colors.lime[80],
    },
  },

  page: {
    background: gradients.no_gradient_page_bg_dark,
    text: colors.indigo[20],

    auth: {
      pictureBackground: gradients.lime_green_light.value,
      headerMain: colors.indigo[20],
      headerSub: colors.neutral[30],
      headerAccent: colors.lime.base,
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

  game: {
    guessBoo: {
      setup: {
        currentUserPanel: {
          background: gradients.lime_green_dark.value,
          text: colors.indigo[80],
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.lime[20],
      highlighting: colors.lime[20],
    },
    background: colors.lime.base,
    text: colors.indigo[80],
    shadow: shadows.lime.small,
  },

  input: {
    default: 'lime',
    indigo: {
      background: colors.indigo[80],
      backgroundVibrant: colors.indigo[100],

      text: colors.indigo[20],
      textPlaceholder: colors.neutral[60],
      textInvalid: colors.red.dark,

      focusBorder: colors.indigo.base,
      focusBorderInvalid: colors.red.dark,

      shadow: shadows.dark.small,
      shadowInvalid: shadows.red.small,

      icon: {
        fill: colors.neutral[60],
        fillHover: colors.indigo[100],
        background: 'transparent',
        backgroundHover: colors.lime.base,
      },
    },
    lime: {
      background: colors.lime[80],
      backgroundVibrant: colors.lime[100],

      text: colors.lime[20],
      textPlaceholder: colors.neutral[60],
      textInvalid: colors.red.dark,

      focusBorder: colors.lime.base,
      focusBorderInvalid: colors.red.dark,

      shadow: shadows.dark.small,
      shadowInvalid: shadows.red.small,

      icon: {
        fill: colors.neutral[60],
        fillHover: colors.lime[100],
        background: 'transparent',
        backgroundHover: colors.lime.base,
      },
    },
  },

  button: {
    default: 'lime',
    indigo: {
      background: colors.indigo[80],
      text: colors.indigo[20],
      shadow: shadows.dark.medium,
      backgroundPrimary: colors.indigo.base,
      textPrimary: colors.indigo[20],
      shadowPrimary: colors.indigo.base,
      textOutline: colors.indigo[80],
      borderOutline: colors.indigo[80],
    },
    lime: {
      background: colors.indigo[80],
      text: colors.indigo[20],
      shadow: shadows.dark.medium,
      backgroundPrimary: colors.lime.base,
      textPrimary: colors.indigo[80],
      shadowPrimary: colors.lime.base,
      textOutline: colors.indigo[80],
      borderOutline: colors.indigo[80],
    },
  },

  toggle: {
    default: 'lime',
    indigo: {
      backgroundOff: colors.indigo[80],
      toggleOff: colors.indigo.base,
      backgroundOn: colors.indigo.base,
      toggleOn: colors.indigo[0],
    },
    lime: {
      backgroundOff: colors.indigo[80],
      toggleOff: colors.lime.base,
      backgroundOn: colors.lime.base,
      toggleOn: colors.indigo[80],
    },
  },

  radioExtended: {
    default: 'lime',
    indigo: {
      text: colors.indigo[20],
      headerBackground: colors.indigo[60],
      bodyBackground: colors.indigo[80],
      indicator: colors.lime.base,
      indicatorBackground: colors.indigo[80],
      icon: colors.indigo[20],
    },
    lime: {
      text: colors.lime[20],
      headerBackground: colors.lime[60],
      bodyBackground: colors.lime[80],
      indicator: colors.lime.base,
      indicatorBackground: colors.lime[80],
      icon: colors.lime[20],
    },
  },

  gameButton: {
    text: colors.indigo[20],
    background: 'none',
    textSelected: colors.indigo[80],
    backgroundSelected: colors.lime.base,
  },
};

export default dark;
