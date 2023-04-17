import { Ports, Protocols } from '@/common/constants';

export const apiUrl = () => {
  return Protocols.DEFAULT + window.location.hostname + Ports.DEFAULT + '/api/';
};

export const roomSocketUrl =
  Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/socket';

export const chatSocketUrl =
  Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/chat-socket';
