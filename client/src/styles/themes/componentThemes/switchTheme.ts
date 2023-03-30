import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    backgroundOn: 'none',
    textOn: colors.indigo.text.dark,
    backgroundOff: colors.indigo.base,
    textOff: colors.lime.text.light,
  },
  lime: {
    backgroundOn: 'none',
    textOn: colors.lime.text.dark,
    backgroundOff: colors.lime.base,
    textOff: colors.lime.text.dark,
  },
};

const dark = {
  indigo: {
    backgroundOn: 'none',
    textOn: colors.indigo.text.light,
    backgroundOff: colors.indigo.base,
    textOff: colors.indigo[0],
  },
  lime: {
    backgroundOn: 'none',
    textOn: colors.lime.text.light,
    backgroundOff: colors.lime.base,
    textOff: colors.lime.text.dark,
  },
};

const switchTheme = {
  light,
  dark,
};

export default switchTheme;
