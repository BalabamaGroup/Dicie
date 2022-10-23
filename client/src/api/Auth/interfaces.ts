interface signUpProps {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface signUpResponse {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface signInProps {
  username: string;
  password: string;
}

interface signInResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  role: string;
}

interface takenSignUpInfo {
  [index: number]: { username: string; email: string };
}

export type {
  signUpProps,
  signUpResponse,
  signInProps,
  signInResponse,
  takenSignUpInfo,
};
