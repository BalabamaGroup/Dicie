import colors from "../colors";

const dark = {
  page: {
    background: colors.dark.default,

    auth: {
      headerMain: colors.light.default,
      headerSub: colors.neutral[30],
      headerAccent: colors.yellow,
      pictureBackground: colors.yellow,
    },
  },

  switch: {
    isChosen: {
      background: "none",
      text: colors.yellow,
      highlighting: colors.yellow,
    },
    background: colors.yellow,
    text: colors.dark.default,
    shadow: colors.shadow.yellow.small,
  },

  button: {
    background: colors.yellow,
    text: colors.dark.default,
    shadow: colors.shadow.yellow.small,
  },

  navbar: {
    background: colors.light.default,
    text: colors.dark.default,
  },

  input: {
    background: colors.dark.darker,
    placeholderText: colors.neutral[60],
    text: colors.light.default,
    textInvalid: colors.red,
    shadow: colors.shadow.dark.large,
    shadowInvalid: colors.shadow.red.small,

    icon: {
      fill: colors.neutral[60],
      fillHover: colors.dark.darker,
      backgroundHover: colors.yellow,
      background: colors.dark.darker,
    },

    note: {
      text: colors.red,
    },
  },
};

export default dark;
