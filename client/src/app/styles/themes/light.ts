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
      headerAccent: colors.purple,
    },

    home: {
      cards: {
        createRoom: {
          defaultText: colors.dark,
          background: gradients.yellow_green,
          selectedBackground: colors.light,
          chooseGameBackground: colors.white,
          text: colors.dark,
          shadowHover: shadows.yellow.large,
        },
        orLabel: {
          background: colors.light,
          text: colors.dark,
          shadow: shadows.light.large,
        },
        joinRoom: {
          defaultText: colors.light,
          background: gradients.indigo_purple,
          selectedBackground: colors.light,
          text: colors.light,
          shadowHover: shadows.purple.large,
        },
      },
    },
  },

  game: {
    guessBoo: {
      playerPicking: {
        currentUserPanel: {
          background: gradients.indigo_purple.value,
          text: colors.light,
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.purple,
      highlighting: colors.purple,
    },
    background: colors.purple,
    text: colors.light,
    shadow: shadows.purple.small,
  },

  button: {
    background: colors.purple,
    text: colors.light,
    shadow: shadows.purple.medium,
  },

  radioExtended: {
    text: colors.dark,
    headerBackground: colors.light_neutral,
    bodyBackground: colors.white,
    indicator: colors.purple,
    indicatorBackground: colors.white,
    icon: colors.dark,
  },

  navbar: {
    background: 'none',
    text: colors.dark,
    textLight: colors.light,
    textDark: colors.dark,
  },

  gameButton: {
    text: colors.dark,
    background: 'none',
    textSelected: colors.light,
    backgroundSelected: colors.purple,
  },
};

export default light;
