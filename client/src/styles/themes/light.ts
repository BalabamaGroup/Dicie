import Theme from '@/common/types/theme';

import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const light = {
  page: {
    background: gradients.light,

    auth: {
      pictureBackground: gradients.indigo_purple_light.value,
      headerMain: colors.dark.default,
      headerSub: colors.neutral[70],
      headerAccent: colors.purple,
    },

    home: {
      cards: {
        createRoom: {
          background: gradients.yellow_green,
          selectedBackground: colors.light.default,
          text: colors.dark.default,
          shadowHover: shadows.yellow.large,
        },
        orLabel: {
          background: colors.light.default,
          text: colors.dark.default,
          shadow: shadows.light.large,
        },
        joinRoom: {
          background: gradients.indigo_purple,
          selectedBackground: colors.light.default,
          text: colors.light.default,
          shadowHover: shadows.purple.large,
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
    text: colors.light.default,
    shadow: shadows.purple.small,
  },

  button: {
    background: colors.purple,
    text: colors.light.default,
    shadow: shadows.purple.medium,
  },

  navbar: {
    background: 'none',
    text: colors.dark.default,
    forsedTextLight: colors.light.default,
    forsedTextDark: colors.dark.default,
  },

  input: {
    default: {
      background: colors.light.default,
    },
    virant: {
      background: colors.light.lighter,
    },

    placeholderText: colors.neutral[40],
    text: colors.dark.default,
    textInvalid: colors.dark.default,
    shadow: shadows.purple.small,
    shadowInvalid: shadows.red.small,

    icon: {
      fill: colors.neutral[40],
      fillHover: colors.light.lighter,
      backgroundHover: colors.purple,
      background: colors.light.lighter,
    },

    note: {
      text: colors.red,
    },
  },

  toggle: {
    wrapperBackground: gradients.indigo_purple.value,
    toggleBackground: colors.light.default,

    forsed: {
      light: {
        wrapperBackground: gradients.indigo_purple.value,
        toggleBackground: colors.light.default,
      },
      dark: {
        wrapperBackground: gradients.yellow_green.value,
        toggleBackground: colors.dark.default,
      },
    },
  },
};

export default light;
