import React, { FC, Context } from "react";
import { Socket } from "socket.io-client";

interface SocketContextValue {
  data: any;
  socket: Socket;
  sentEvent: (event: string, data: any) => void;
  subscribeEvents: (events: string[]) => void;
  unsubscribeEvents: (events: string[]) => void;
}

interface SocketContextProviderProps {
  url: string;
  socketContextId: string;
  incomingEvents: string[];
  children: React.ReactNode;
}

function getSocketContext(): Context;

const SocketContextProvider: FC<SocketContextProviderProps>;

export { SocketContextProvider, SocketContextValue, getSocketContext };
