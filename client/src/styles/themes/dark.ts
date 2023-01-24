import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark: any = {
  name: 'dark',

  page: {
    background: gradients.dark,
    text: colors.light,

    auth: {
      pictureBackground: gradients.yellow_green_light.value,
      headerMain: colors.light,
      headerSub: colors.neutral[30],
      headerAccent: colors.yellow,
    },

    home: {
      cards: {
        default: {
          background: gradients.dark,
        },
        createRoom: {
          background: gradients.yellow_green,
          selectedBackground: colors.dark,
          text: colors.dark,
          shadowHover: shadows.yellow.large,
        },
        orLabel: {
          background: colors.dark,
          text: colors.light,
          shadow: shadows.dark.large,
        },
        joinRoom: {
          background: gradients.indigo_purple,
          selectedBackground: colors.dark,
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
          background: gradients.yellow_green.value,
          text: colors.dark,
        },
      },
    },
  },

  switch: {
    isChosen: {
      background: 'none',
      text: colors.yellow,
      highlighting: colors.yellow,
    },
    background: colors.yellow,
    text: colors.dark,
    shadow: shadows.yellow.small,
  },

  button: {
    background: gradients.yellow_green.value,
    text: colors.dark,
    shadow: shadows.yellow.small,
  },

  navbar: {
    background: 'none',
    text: colors.light,
    forsedTextLight: colors.light,
    forsedTextDark: colors.dark,
  },

  toggle: {
    wrapperBackground: gradients.yellow_green.value,
    toggleBackground: colors.dark,

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

export default dark;
