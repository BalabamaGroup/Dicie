import { Ports, Protocols } from '@/common/constants';

export const apiUrl = () => {
  return Protocols.DEFAULT + window.location.hostname + '/api/';
};

export const socketUrl = () => {
  return (
    Protocols.SOCKET + window.location.hostname + '/socket'
  );
};
