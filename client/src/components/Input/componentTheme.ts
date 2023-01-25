import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

export type InputThemeType = {
  background: string;
  backgroundVibrant: string;

  text: string;
  textPlaceholder: string;
  textInvalid: string;

  focusBorder: string;
  focusBorderInvalid: string;

  shadow: string;
  shadowInvalid: string;

  icon: {
    fill: string;
    fillHover: string;
    background: string;
    backgroundHover: string;
  };
};

export const InputThemeLight: InputThemeType = {
  background: colors.white,
  backgroundVibrant: colors.light,

  text: colors.dark,
  textPlaceholder: colors.neutral[40],
  textInvalid: colors.dark,

  focusBorder: colors.purple,
  focusBorderInvalid: colors.red,

  shadow: shadows.purple.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[40],
    fillHover: colors.white,
    background: colors.white,
    backgroundHover: colors.purple,
  },
};

export const InputThemeDark: InputThemeType = {
  background: colors.dark,
  backgroundVibrant: colors.black,

  text: colors.light,
  textPlaceholder: colors.neutral[60],
  textInvalid: colors.red,

  focusBorder: colors.yellow,
  focusBorderInvalid: colors.red,

  shadow: shadows.dark.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[60],
    fillHover: colors.black,
    background: 'transparent',
    backgroundHover: colors.yellow,
  },
};
