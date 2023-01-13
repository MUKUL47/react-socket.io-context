import React, {
  useEffect, useMemo,
  useRef,
  useState
} from "react";
import SocketContext from "./socket-context";
import SocketService from "./socket-service";
export default function SocketContextProvider({ url, socketContextId, incomingEvents , children}) {
  const [data, setData] = useState(null);
  const Context = useMemo(
    () => SocketContext.createContext(socketContextId),
    []
  );
  const { current } = useRef(new SocketService({ url }));
  useEffect(() => {
    return () => {
      SocketContext.removeContext(socketContextId)
      current.socket.disconnect()
    };
  }, []);
  useMemo(() => {
    current.onEventResponse({
      cb: (e, response) => {
        setData({ name: e, response });
      },
      events: incomingEvents,
    });
  }, []);
  return (
    <Context.Provider
      value={{
        data,
        socket: current.getSocket(),
        sentEvent: current.sentEvent,
        subscribeEvents : current.updateEvents,
        unsubscribeEvents : current.removeEvents
      }}
    >
      {children}
    </Context.Provider>
  );
}
