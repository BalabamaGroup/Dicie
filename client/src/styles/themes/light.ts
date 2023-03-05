import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  name: 'light',

  page: {
    background: gradients.light,
    text: colors.dark,

    auth: {
      pictureBackground: gradients.indigo_purple_light.value,
      headerMain: colors.dark,
      headerSub: colors.neutral[70],
      headerAccent: colors.indigo_dark,
    },

    home: {
      createRoomCard: {
        defaultText: colors.dark,
        background: gradients.yellow_green_light,
        selectedBackground: colors.light,
        chooseGameBackground: colors.white,
        text: colors.dark,
        shadowHover: shadows.yellow.large,
      },
      joinRoomCard: {
        defaultText: colors.dark,
        text: colors.dark,
        background: gradients.indigo_purple_light,
        selectedBackground: colors.light,
        shadowHover: shadows.purple.large,
      },
    },
  },

  game: {
    guessBoo: {
      playerPicking: {
        currentUserPanel: {
          background: gradients.indigo_purple_dark.value,
          text: colors.light,
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.indigo_dark,
      highlighting: colors.indigo_dark,
    },
    background: colors.indigo_dark,
    text: colors.light,
    shadow: shadows.purple.small,
  },

  button: {
    indigo: {
      background: colors.light,
      text: colors.dark,
      shadow: shadows.light.medium,
      backgroundPrimary: colors.indigo_dark,
      textPrimary: colors.light,
      shadowPrimary: shadows.purple.medium,
      textOutline: colors.light,
      borderOutline: colors.light,
    },
    yellow: {
      background: colors.light,
      text: colors.dark,
      shadow: shadows.light.medium,
      backgroundPrimary: colors.yellow_dark,
      textPrimary: colors.dark,
      shadowPrimary: shadows.purple.medium,
      textOutline: colors.light,
      borderOutline: colors.light,
    },
  },

  radioExtended: {
    text: colors.dark,
    headerBackground: colors.light_neutral,
    bodyBackground: colors.white,
    indicator: colors.indigo_dark,
    indicatorBackground: colors.white,
    icon: colors.dark,
  },

  navbar: {
    background: colors.white,
    text: colors.dark,
    revertText: colors.light,
    forsedTextLight: colors.light,
    forsedTextDark: colors.dark,
  },

  gameButton: {
    text: colors.dark,
    background: 'none',
    textSelected: colors.light,
    backgroundSelected: colors.indigo_dark,
  },
};

export default light;
