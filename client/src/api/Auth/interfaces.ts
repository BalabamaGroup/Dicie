export interface signUpData {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface signUpRes {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface signInData {
  username: string;
  password: string;
}

export interface signInRes {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface takenSignUpInfoRes {
  [index: number]: { username: string; email: string };
}
