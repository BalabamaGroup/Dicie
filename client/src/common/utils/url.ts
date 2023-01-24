import { Hosts, Protocols } from '@/common/constants';

export const apiUrl = () => {
  console.log(location);
  console.log('Api URL', Protocols.DEFAULT + window.location.hostname);
  return Protocols.DEFAULT + window.location.hostname + ':8080' + '/api/';
};

export const socketUrl = () => {
  console.log('Socket URL', Protocols.DEFAULT + window.location.hostname);
  return Protocols.SOCKET + window.location.hostname + ':8080' + '/socket/';
};
