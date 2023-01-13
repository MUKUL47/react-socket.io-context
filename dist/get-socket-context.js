import { useMemo } from "react";
import SocketContext from "./socket-context";
export default function getSocketContext(socketContextId) {
  const socketContext = SocketContext.getContextById(socketContextId);
  if (!socketContext) {
    throw new Error("Socket context not found");
  }
  return socketContext?.context || {};
}