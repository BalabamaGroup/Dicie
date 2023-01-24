import { Hosts, Protocols } from '@/common/constants';

export const apiUrl = () => {
  let hostname = window.location.hostname;
  if (hostname !== 'localhost') hostname = '164.92.151.90';
  console.log(window.location.hostname, hostname);

  console.log('Api URL', Protocols.DEFAULT + window.location.hostname);
  return Protocols.DEFAULT + window.location.hostname + ':8080' + '/api/';
};

export const socketUrl = () => {
  let hostname = window.location.hostname;
  if (hostname !== 'localhost') hostname = '164.92.151.90';
  console.log(window.location.hostname, hostname);

  console.log('Socket URL', Protocols.DEFAULT + window.location.hostname);
  return Protocols.SOCKET + hostname + ':8080' + '/socket/';
};
