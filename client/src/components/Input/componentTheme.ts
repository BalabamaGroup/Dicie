import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

export type InputThemeType = {
  background: string;
  backgroundVibrant: string;

  textPlaceholder: string;
  text: string;
  textInvalid: string;
  shadow: string;
  shadowInvalid: string;

  icon: {
    fill: string;
    fillHover: string;
    backgroundHover: string;
    background: string;
  };

  note: {
    text: string;
  };
};

export const InputThemeLight = {
  background: colors.white,
  backgroundVibrant: colors.light,

  textPlaceholder: colors.neutral[40],
  text: colors.dark,
  textInvalid: colors.dark,
  shadow: shadows.purple.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[40],
    fillHover: colors.white,
    backgroundHover: colors.purple,
    background: colors.white,
  },

  note: {
    text: colors.red,
  },
};

export const InputThemeDark = {
  background: colors.dark,
  backgroundVibrant: colors.black,

  textPlaceholder: colors.neutral[60],
  text: colors.light,
  textInvalid: colors.red,
  shadow: shadows.dark.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[60],
    fillHover: colors.black,
    backgroundHover: colors.yellow,
    background: 'transparent',
  },

  note: {
    text: colors.red,
  },
};
