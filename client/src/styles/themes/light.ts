import RadioExtended from '../../components/RadioExtendend/index';
import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  name: 'light',

  page: {
    background: gradients.light,
    text: colors.dark,

    auth: {
      pictureBackground: gradients.indigo_purple.value,
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
    background: colors.light,
    text: colors.dark,
    shadow: shadows.light.medium,

    backgroundPrimary: colors.purple,
    textPrimary: colors.light,
    shadowPrimary: shadows.purple.medium,

    textOutline: colors.light,
    borderOutline: colors.light,
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
    backgroundSelected: colors.purple,
  },
};

export default light;
