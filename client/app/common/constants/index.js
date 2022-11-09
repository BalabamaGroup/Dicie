export const Protocols = Object.freeze({
  DEFAULT: "http://",
  SOCKET: "ws://",
});

export const Hosts = Object.freeze({
  CLIENT: "localhost:3000/",
  SERVER: "localhost:8080/",
  SERVER_API: "localhost:8080/api/",
  SERVER_SOCKET: "localhost:8080/socket",
});

export const RoleTypes = Object.freeze({
  USER: "ROLE_USER",
  ADMIN: "ROLE_ADMIN",
});

export const authFormViews = Object.freeze({
  SIGN_UP: "SIGN_UP",
  SIGN_IN: "SIGN_IN",
});

export const homeContentCards = Object.freeze({
  DEFAULT: "DEFAULT",
  CREATE_ROOM: "CREATE_ROOM",
  JOIN_ROOM: "JOIN_ROOM",
});
