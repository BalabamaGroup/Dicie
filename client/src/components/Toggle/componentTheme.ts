import colors from '@/styles/colors/colors';

export const lightComponentTheme = {
  indigo: {
    backgroundOff: colors.indigo[0],
    toggleOff: colors.indigo.light,
    backgroundOn: colors.indigo.base,
    toggleOn: colors.indigo[20],
  },
  lime: {
    backgroundOff: colors.lime.light,
    toggleOff: colors.lime.base,
    backgroundOn: colors.lime.base,
    toggleOn: colors.indigo[80],
  },
};

export const darkComponentTheme = {
  indigo: {
    backgroundOff: colors.indigo[80],
    toggleOff: colors.indigo.base,
    backgroundOn: colors.indigo.base,
    toggleOn: colors.indigo[0],
  },
  lime: {
    backgroundOff: colors.indigo[80],
    toggleOff: colors.lime.base,
    backgroundOn: colors.lime.base,
    toggleOn: colors.indigo[80],
  },
};

// 645E80
