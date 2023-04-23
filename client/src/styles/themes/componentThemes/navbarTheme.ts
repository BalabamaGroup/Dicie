import colors from '@/styles/colors/colors';

const light = {
  indigo: {
    desktop: {
      logoText: colors.indigo[80],
      optionText: colors.indigo[80],
      optionExpandedHeader: colors.indigo[80],
      optionExpandedBackground: colors.indigo[10],
      optionExpandedBorder: colors.indigo[0],
    },
    mobile: {
      burgerBackground: colors.indigo.base,
      burgerIconFill: colors.indigo[10],
      openedBackground: colors.indigo[10],
      optionText: colors.indigo[80],
      optionBackgroundHover: colors.indigo[0],
      optionIconFill: colors.indigo.base,
      optionExpandedHeaderContent: colors.indigo.dark,
      optionExpandedHeaderContentHover: colors.indigo[80],
      optionExpandedHeaderBackground: colors.indigo[10],
    },
    options: {
      myRoomNavigation: {
        buttonContent: colors.indigo[80],
        buttonDesconnectContent: colors.red.dark,
        buttonHover: colors.indigo[0],
      },
      settings: {
        text: colors.indigo[80],
      },
    },
  },

  lime: {
    desktop: {
      logoText: colors.lime[80],
      optionText: colors.lime[80],
      optionExpandedHeader: colors.lime[80],
      optionExpandedBackground: colors.lime[10],
      optionExpandedBorder: colors.lime[0],
    },
    mobile: {
      burgerBackground: colors.lime.base,
      burgerIconFill: colors.lime[80],
      openedBackground: colors.lime[10],
      optionText: colors.lime[80],
      optionBackgroundHover: colors.lime[0],
      optionIconFill: colors.lime.dark,
      optionExpandedHeaderContent: colors.lime.dark,
      optionExpandedHeaderContentHover: colors.lime[80],
      optionExpandedHeaderBackground: colors.lime[10],
    },
    options: {
      myRoomNavigation: {
        buttonContent: colors.lime[80],
        buttonDesconnectContent: colors.red.dark,
        buttonHover: colors.lime[0],
      },
      settings: {
        text: colors.indigo[80],
      },
    },
  },
};

const dark = {
  indigo: {
    desktop: {
      logoText: colors.indigo[0],
      optionText: colors.indigo[0],
      optionExpandedHeader: colors.indigo[0],
      optionExpandedBackground: colors.indigo[80],
      optionExpandedBorder: colors.indigo[90],
    },
    mobile: {
      burgerBackground: colors.indigo.base,
      burgerIconFill: colors.indigo[10],
      openedBackground: colors.indigo[80],
      optionText: colors.indigo[0],
      optionBackgroundHover: colors.indigo[90],
      optionIconFill: colors.indigo.base,
      optionExpandedHeaderContent: colors.indigo.base,
      optionExpandedHeaderContentHover: colors.indigo[0],
      optionExpandedHeaderBackground: colors.indigo[90],
    },
    options: {
      myRoomNavigation: {
        buttonContent: colors.indigo[0],
        buttonDesconnectContent: colors.red.dark,
        buttonHover: colors.indigo[90],
      },
      settings: {
        text: colors.indigo[0],
      },
    },
  },

  lime: {
    desktop: {
      logoText: colors.lime[80],
      optionText: colors.lime[80],
      optionExpandedHeader: colors.lime[0],
      optionExpandedBackground: colors.lime[80],
      optionExpandedBorder: colors.lime[90],
    },
    mobile: {
      burgerBackground: colors.lime.base,
      burgerIconFill: colors.lime[80],
      openedBackground: colors.lime[80],
      optionText: colors.lime[0],
      optionBackgroundHover: colors.lime[90],
      optionIconFill: colors.lime.base,
      optionExpandedHeaderContent: colors.lime.base,
      optionExpandedHeaderContentHover: colors.lime[0],
      optionExpandedHeaderBackground: colors.lime[90],
    },
    options: {
      myRoomNavigation: {
        buttonContent: colors.lime[0],
        buttonDesconnectContent: colors.red.dark,
        buttonHover: colors.lime[90],
      },
      settings: {
        text: colors.lime[0],
      },
    },
  },
};

const navbarTheme = {
  light,
  dark,
};

export default navbarTheme;
