type Theme = {
  page: {
    background: string;
    auth: {
      pictureBackground: string;
      headerMain: string;
      headerSub: string;
      headerAccent: string;
    };
    home: {
      cards: {
        createRoom: {
          background: string;
          text: string;
          shadowHover: string;
        };
        orLabel: {
          background: string;
          text: string;
          shadow: string;
        };
        joinRoom: {
          background: string;
          text: string;
          shadowHover: string;
        };
      };
    };
  };

  switch: {
    isChosen: {
      background: string;
      text: string;
      highlighting: string;
    };
    background: string;
    text: string;
    shadow: string;
  };

  button: {
    background: string;
    text: string;
    shadow: string;
  };

  navbar: {
    background: string;
    text: string;
  };

  input: {
    background: string;
    placeholderText: string;
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
};

export default Theme;
