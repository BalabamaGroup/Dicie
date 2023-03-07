import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  name: 'light',

  navbar: {
    default: 'indigo',
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
    background: gradients.no_gradient_page_bg_light,
    text: '#141414',

    auth: {
      pictureBackground: gradients.indigo_purple_light.value,
      headerMain: colors.indigo[60],
      headerSub: colors.indigo[40],
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

  game: {
    guessBoo: {
      setup: {
        backgroundWait: gradients.indigo_purple_light.value,
        backgroundGo: gradients.lime_green_light.value,
        currentUserPanel: {
          background: gradients.indigo_purple_dark.value,
          text: colors.indigo[20],
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.indigo[60],
      highlighting: colors.indigo[60],
    },
    background: colors.indigo.light,
    text: colors.indigo[80],
    shadow: shadows.indigo.small,
  },

  input: {
    default: 'indigo',
    indigo: {
      background: colors.indigo[0],
      backgroundVibrant: colors.indigo[20],

      text: colors.indigo[80],
      textPlaceholder: colors.neutral[40],
      textInvalid: colors.red.light,

      focusBorder: colors.indigo.base,
      focusBorderInvalid: colors.red.light,

      shadow: shadows.indigo.small,
      shadowInvalid: shadows.red.small,

      icon: {
        fill: colors.neutral[40],
        fillHover: colors.indigo[80],
        background: colors.indigo[0],
        backgroundHover: colors.indigo.light,
      },
    },
    lime: {
      background: colors.lime[20],
      backgroundVibrant: colors.lime[20],

      text: colors.lime[100],
      textPlaceholder: colors.neutral[60],
      textInvalid: colors.red.light,

      focusBorder: colors.lime.base,
      focusBorderInvalid: colors.red.light,

      shadow: shadows.lime.small,
      shadowInvalid: shadows.red.small,

      icon: {
        fill: colors.neutral[40],
        fillHover: colors.lime[0],
        background: colors.lime[0],
        backgroundHover: colors.lime.base,
      },
    },
  },

  button: {
    default: 'indigo',
    indigo: {
      background: colors.indigo[20],
      text: colors.indigo[80],
      shadow: shadows.light.medium,
      backgroundPrimary: colors.indigo.light,
      textPrimary: colors.indigo[80],
      shadowPrimary: shadows.indigo.medium,
      textOutline: colors.indigo[20],
      borderOutline: colors.indigo[20],
    },
    lime: {
      background: colors.lime[20],
      text: colors.lime[80],
      shadow: shadows.light.medium,
      backgroundPrimary: colors.lime.light,
      textPrimary: colors.lime[80],
      shadowPrimary: shadows.lime.medium,
      textOutline: colors.lime[20],
      borderOutline: colors.lime[20],
    },
  },

  toggle: {
    default: 'indigo',
    indigo: {
      backgroundOff: colors.indigo[0],
      toggleOff: colors.indigo.light,
      backgroundOn: colors.indigo.base,
      toggleOn: colors.indigo[20],
    },
    lime: {
      backgroundOff: colors.lime.light,
      toggleOff: colors.lime.base,
      backgroundOn: colors.lime.base,
      toggleOn: colors.lime.dark,
    },
  },

  radioExtended: {
    default: 'indigo',
    indigo: {
      text: colors.indigo[80],
      headerBackground: colors.indigo.light,
      bodyBackground: colors.indigo[0],
      indicator: colors.indigo.base,
      indicatorBackground: colors.indigo[0],
      icon: colors.indigo[80],
    },
    lime: {
      text: colors.lime[80],
      headerBackground: colors.lime.light,
      bodyBackground: colors.lime[20],
      indicator: colors.lime.dark,
      indicatorBackground: colors.lime[0],
      icon: colors.lime[80],
    },
  },

  gameButton: {
    text: colors.indigo[80],
    background: 'none',
    textSelected: colors.indigo[20],
    backgroundSelected: colors.indigo.base,
  },
};

export default light;
