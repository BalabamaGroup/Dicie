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
