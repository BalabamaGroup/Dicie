export const getUsernameValidationData = () => {
  return {
    validation: {
      regex: /^[A-z][A-z0-9-_]{3,23}$/,
      note: '4 to 24 characters\nMust begin with a letter\nAllowed special characters:  _ -',
    },
    existance: {
      note: 'Username is taken',
    },
  };
};

export const getEmailValidationData = () => {
  return {
    validation: {
      regex:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      note: 'Email is not valid',
    },
    existance: {
      note: 'Email is taken',
    },
  };
};

export const getPasswordValidationData = () => {
  return {
    validation: {
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      note: 'Minimum eight characters\nAt least one uppercase letter\none lowercase letter and one number',
    },
  };
};

export const getMatchPasswordValidationData = () => {
  return {
    custom: {
      note: 'Must match the first password input field',
    },
  };
};
