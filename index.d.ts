import React, { FC } from "react";
import { Socket } from "socket.io-client";

interface SocketContextValue<T> {
  data: { name: string; response: T };
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

const SocketContextProvider: FC<SocketContextProviderProps>;

export { SocketContextProvider, SocketContextValue };
