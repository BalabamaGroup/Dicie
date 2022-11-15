import Theme from '@/common/types/theme';

import colors from '../colors/colors';
import gradients from '../colors/gradients';
import shadows from '../colors/shadows';

const dark = {
  page: {
    background: gradients.dark,

    auth: {
      pictureBackground: gradients.yellow_green_light.value,
      headerMain: colors.light.default,
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
          selectedBackground: colors.dark.default,
          text: colors.dark.default,
          shadowHover: shadows.yellow.large,
        },
        orLabel: {
          background: colors.dark.default,
          text: colors.light.default,
          shadow: shadows.dark.large,
        },
        joinRoom: {
          background: gradients.indigo_purple,
          selectedBackground: colors.dark.default,
          text: colors.light.default,
          shadowHover: shadows.purple.large,
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
    text: colors.dark.default,
    shadow: shadows.yellow.small,
  },

  button: {
    background: gradients.yellow_green.value,
    text: colors.dark.default,
    shadow: shadows.yellow.small,
  },

  navbar: {
    background: 'none',
    text: colors.light.default,
    forsedTextLight: colors.light.default,
    forsedTextDark: colors.dark.default,
  },

  input: {
    background: colors.dark.darker,
    placeholderText: colors.neutral[60],
    text: colors.light.default,
    textInvalid: colors.red,
    shadow: shadows.dark.small,
    shadowInvalid: shadows.red.small,

    icon: {
      fill: colors.neutral[60],
      fillHover: colors.dark.darker,
      backgroundHover: colors.yellow,
      background: 'transparent',
    },

    note: {
      text: colors.red,
    },
  },
};

export default dark;
