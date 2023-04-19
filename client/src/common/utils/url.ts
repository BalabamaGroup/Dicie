import { Ports, Protocols } from '@/common/constants';

//! DEV

export const apiUrl = () =>
  Protocols.DEFAULT + window.location.hostname + Ports.DEFAULT + '/api/';

export const roomSocketUrl =
  Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/socket';

export const chatSocketUrl =
  Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/chat-socket';

// !BUILD

// export const apiUrl = () =>
//   Protocols.DEFAULT + window.location.hostname + '/api/';

// export const roomSocketUrl =
//   Protocols.SOCKET + window.location.hostname + '/socket';

// export const chatSocketUrl =
//   Protocols.SOCKET + window.location.hostname + '/chat-socket';
