export interface signUpProps {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface signUpResponse {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface signInProps {
  username: string;
  password: string;
}

export interface signInResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface takenSignUpInfo {
  [index: number]: { username: string; email: string };
}
