import colors from "../colors";

const light = {
  page: {
    background: colors.light.default,

    auth: {
      headerMain: colors.dark.default,
      headerSub: colors.neutral[70],
      headerAccent: colors.purple,
      pictureBackground: colors.purple,
    },
  },

  switch: {
    isChosen: {
      background: colors.light.default,
      text: colors.purple,
      highlighting: colors.purple,
    },
    background: colors.purple,
    text: colors.light.default,
    shadow: colors.shadow.purple.small,
  },

  button: {
    background: colors.purple,
    text: colors.light.default,
    shadow: colors.shadow.purple.medium,
  },

  navbar: {
    background: colors.dark.default,
    text: colors.light.default,
  },

  input: {
    background: colors.light.lighter,
    placeholderText: colors.neutral[40],
    text: colors.dark.default,
    textInvalid: colors.dark.default,
    shadow: colors.shadow.purple.small,
    shadowInvalid: colors.shadow.red.small,

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
};

export default light;
