# react-socket.io-context

## Simple and easy to use react socket context wrapper library with multiple instances

## Usage

### install

```
npm i react-socket.io-context
```

```js
import { useContext } from "react";
import ReactSocket from "react-socket.io-context";
const MY_CONTEXT = "MY_CONTEXT";
const MY_CONTEXT_TWO = "MY_CONTEXT_TWO";
function App() {
  return (
    <div>
      <ReactSocket.SocketContextProvider
        url="http://localhost:8080"
        socketContextId={MY_CONTEXT}
        incomingEvents={["CONNECT", "HELLO"]}
      >
        <SocketChild />
      </ReactSocket.SocketContextProvider>

      <h1>SECOND SOCKET</h1>

      <ReactSocket.SocketContextProvider
        url="http://localhost:8081"
        socketContextId={MY_CONTEXT_TWO}
        incomingEvents={["CONNECT!!!", "HELLO!!!"]}
      >
        <SocketChild_TWO />
      </ReactSocket.SocketContextProvider>
    </div>
  );
}
function SocketChild({}) {
  const Context = useContext(ReactSocket.getSocketContext(MY_CONTEXT));
  console.log(Context);
  /**
   * context
   *
   * data => { name : EVENT_NAME, response : DATA_FROM_SERVER }
   * socket => socket.io client instance
   * subscribeEvents => Function (add additional events on demand)
   * unsubscribeEvents => Function (remove events on demand)
   * sendEvent => Function(eventName, data) (emit event takes 2 )
   */
  useEffect(() => {
    return () => Context?.socket?.disconnect?.(); //if you want to disconnect on unmount
  }, []);
  useEffect(() => {
    switch (Context.name) {
      case "CONNECT":
        /* DO SOMETHING */ break;
      case "HELLO":
        /* DO SOMETHING */ break;
    }
  }, [Context.data]);
  return "SocketChild";
}
function SocketChild_TWO({}) {
  const Context = useContext(ReactSocket.getSocketContext(MY_CONTEXT_TWO));
  return "SocketChild_TWO";
}
export default App;
```
