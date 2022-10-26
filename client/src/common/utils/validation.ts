export const getUsernameValidationData = () => {
  return {
    validation: {
      regex: /^[A-z][A-z0-9-_]{3,23}$/,
      note: "4 to 24 characters.\nMust begin with a letter.\nLetters, numbers, underscores, hyphens allowed.",
    },
    existance: {
      note: "Username is taken",
    },
  };
};

export const getEmailValidationData = () => {
  return {
    validation: {
      regex:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      note: "Email is not valid",
    },
    existance: {
      note: "Email is taken",
    },
  };
};
