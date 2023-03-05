import colors from '@/styles/colors/colors';
import shadows from '@/styles/colors/shadows';

export const lightComponentTheme = {
  background: colors.white,
  backgroundVibrant: colors.light,

  text: colors.dark,
  textPlaceholder: colors.neutral[40],
  textInvalid: colors.red,

  focusBorder: colors.indigo_dark,
  focusBorderInvalid: colors.red,

  shadow: shadows.purple.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[40],
    fillHover: colors.white,
    background: colors.white,
    backgroundHover: colors.indigo_dark,
  },
};

export const darkComponentTheme = {
  background: colors.dark,
  backgroundVibrant: colors.black,

  text: colors.light,
  textPlaceholder: colors.neutral[60],
  textInvalid: colors.red,

  focusBorder: colors.yellow_dark,
  focusBorderInvalid: colors.red,

  shadow: shadows.dark.small,
  shadowInvalid: shadows.red.small,

  icon: {
    fill: colors.neutral[60],
    fillHover: colors.black,
    background: 'transparent',
    backgroundHover: colors.yellow_dark,
  },
};
