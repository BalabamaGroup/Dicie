import { Hosts, Protocols } from '@/app/common/constants';

export const apiUrl = () => {
  return Protocols.DEFAULT + Hosts.SERVER_API;
};

export const socketUrl = () => {
  return Protocols.SOCKET + Hosts.SERVER_SOCKET;
};
