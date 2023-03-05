import colors from '@/styles/colors/colors';

export const lightComponentTheme = {
  indigo: {
    backgroundOff: colors.white,
    toggleOff: colors.indigo_light,
    backgroundOn: colors.indigo_dark,
    toggleOn: colors.light,
  },
  yellow: {
    backgroundOff: colors.yellow_light,
    toggleOff: colors.yellow_dark,
    backgroundOn: colors.yellow_dark,
    toggleOn: colors.dark,
  },
};

export const darkComponentTheme = {
  indigo: {
    backgroundOff: colors.dark,
    toggleOff: colors.indigo_dark,
    backgroundOn: colors.indigo_dark,
    toggleOn: colors.white,
  },
  yellow: {
    backgroundOff: colors.dark,
    toggleOff: colors.yellow_dark,
    backgroundOn: colors.yellow_dark,
    toggleOn: colors.dark,
  },
};

// 645E80
