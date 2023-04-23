export const Protocols =
  import.meta.env.MODE === 'development'
    ? {
        DEFAULT: 'http://',
        SOCKET: 'ws://',
      }
    : {
        DEFAULT: 'https://',
        SOCKET: 'wss://',
      };

export const Ports = Object.freeze({
  DEFAULT: ':8080',
  CLIENT_DEV: ':3000',
});

export const apiUrl =
  import.meta.env.MODE === 'development'
    ? Protocols.DEFAULT + window.location.hostname + Ports.DEFAULT + '/api/'
    : Protocols.DEFAULT + window.location.hostname + '/api/';

export const roomSocketUrl =
  import.meta.env.MODE === 'development'
    ? Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/socket'
    : Protocols.SOCKET + window.location.hostname + '/socket';

export const chatSocketUrl =
  import.meta.env.MODE === 'development'
    ? Protocols.SOCKET +
      window.location.hostname +
      Ports.DEFAULT +
      '/chat-socket'
    : Protocols.SOCKET + window.location.hostname + '/chat-socket';
