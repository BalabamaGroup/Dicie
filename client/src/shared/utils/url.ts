import { Ports, Protocols } from '@/shared/constants';

export const apiUrl = () => {
  return Protocols.DEFAULT + window.location.hostname + Ports.DEFAULT + '/api/';
};

export const socketUrl = () => {
  return (
    Protocols.SOCKET + window.location.hostname + Ports.DEFAULT + '/socket'
  );
};
