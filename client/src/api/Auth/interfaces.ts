interface signUpData {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface signUpRes {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface signInData {
  username: string;
  password: string;
}

interface signInRes {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  role: string;
}

interface takenSignUpInfoRes {
  [index: number]: { username: string; email: string };
}

export type {
  signUpData,
  signUpRes,
  signInData,
  signInRes,
  takenSignUpInfoRes,
};
