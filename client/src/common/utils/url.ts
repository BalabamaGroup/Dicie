import { Hosts, Protocols } from '@/common/constants';

export const apiUrl = () => {
  return Protocols.DEFAULT + window.location.hostname + ':8080' + '/api/';
};

export const socketUrl = () => {
  return Protocols.SOCKET + window.location.hostname + ':8080' + '/socket/';
};
