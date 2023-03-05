import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
  name: 'dark',

  page: {
    background: gradients.dark,
    text: colors.light,

    auth: {
      pictureBackground: gradients.yellow_green.value,
      headerMain: colors.light,
      headerSub: colors.neutral[30],
      headerAccent: colors.yellow_dark,
    },

    home: {
      createRoomCard: {
        defaultText: colors.dark,
        background: gradients.yellow_green_dark,
        selectedBackground: colors.black,
        chooseGameBackground: colors.dark,
        text: colors.light,
        shadowHover: shadows.yellow.large,
      },
      joinRoomCard: {
        defaultText: colors.light,
        background: gradients.indigo_purple_dark,
        selectedBackground: colors.dark,
        text: colors.light,
        shadowHover: shadows.purple.large,
      },
    },
  },

  game: {
    guessBoo: {
      playerPicking: {
        currentUserPanel: {
          background: gradients.yellow_green.value,
          text: colors.dark,
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.yellow_dark,
      highlighting: colors.yellow_dark,
    },
    background: colors.yellow_dark,
    text: colors.dark,
    shadow: shadows.yellow.small,
  },

  button: {
    indigo: {
      background: colors.dark,
      text: colors.light,
      shadow: shadows.dark.medium,
      backgroundPrimary: gradients.yellow_green_dark.value,
      textPrimary: colors.light,
      shadowPrimary: colors.indigo_dark,
      textOutline: colors.dark,
      borderOutline: colors.dark,
    },
    yellow: {
      background: colors.dark,
      text: colors.light,
      shadow: shadows.dark.medium,
      backgroundPrimary: gradients.yellow_green_dark.value,
      textPrimary: colors.dark,
      shadowPrimary: colors.yellow_dark,
      textOutline: colors.dark,
      borderOutline: colors.dark,
    },
  },

  radioExtended: {
    text: colors.light,
    headerBackground: colors.dark_neutral,
    bodyBackground: colors.dark,
    indicator: colors.yellow_dark,
    indicatorBackground: colors.dark,
    icon: colors.light,
  },

  navbar: {
    background: colors.black,
    text: colors.light,
    revertText: colors.dark,
    forsedTextLight: colors.light,
    forsedTextDark: colors.dark,
  },

  gameButton: {
    text: colors.light,
    background: 'none',
    textSelected: colors.dark,
    backgroundSelected: colors.yellow_dark,
  },
};

export default dark;
