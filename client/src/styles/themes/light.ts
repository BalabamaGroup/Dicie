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
          background: gradients.yellow_green,
          selectedBackground: colors.light,
          text: colors.dark,
          shadowHover: shadows.yellow.large,
        },
        orLabel: {
          background: colors.light,
          text: colors.dark,
          shadow: shadows.light.large,
        },
        joinRoom: {
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

  navbar: {
    background: 'none',
    text: colors.dark,
    forsedTextLight: colors.light,
    forsedTextDark: colors.dark,
  },

  toggle: {
    wrapperBackground: gradients.indigo_purple.value,
    toggleBackground: colors.light,

    forsed: {
      light: {
        wrapperBackground: gradients.indigo_purple.value,
        toggleBackground: colors.light,
      },
      dark: {
        wrapperBackground: gradients.yellow_green.value,
        toggleBackground: colors.dark,
      },
    },
  },
};

export default light;
