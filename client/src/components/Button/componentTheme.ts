import colors from '@/styles/colors/colors';
import gradients from '@/styles/colors/gradients';
import shadows from '@/styles/colors/shadows';

export const ButtonThemeLight = {
  background: colors.light,
  text: colors.dark,
  shadow: shadows.light.medium,

  backgroundPrimary: gradients.indigo_purple_dark.value,
  textPrimary: colors.light,
  shadowPrimary: shadows.purple.medium,

  textOutline: colors.light,
  borderOutline: colors.light,
};

export const ButtonThemeDark = {
  background: colors.dark,
  text: colors.light,
  shadow: shadows.dark.medium,

  backgroundPrimary: gradients.yellow_green.value,
  textPrimary: colors.dark,
  shadowPrimary: shadows.yellow.small,

  textOutline: colors.dark,
  borderOutline: colors.dark,
};
