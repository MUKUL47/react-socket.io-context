"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocketContextProvider;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _socketContext = _interopRequireDefault(require("./socket-context"));
var _socketService = _interopRequireDefault(require("./socket-service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SocketContextProvider(_ref) {
  let {
    url,
    socketContextId,
    incomingEvents,
    children
  } = _ref;
  const [data, setData] = (0, _react.useState)(null);
  const Context = (0, _react.useMemo)(() => _socketContext.default.createContext(socketContextId), []);
  const {
    current
  } = (0, _react.useRef)(new _socketService.default({
    url
  }));
  (0, _react.useEffect)(() => {
    return () => {
      _socketContext.default.removeContext(socketContextId);
      current.socket.disconnect();
    };
  }, []);
  (0, _react.useMemo)(() => {
    current.onEventResponse({
      cb: (e, response) => {
        setData({
          name: e,
          response
        });
      },
      events: incomingEvents
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      data,
      socket: current.getSocket(),
      sentEvent: current.sentEvent,
      subscribeEvents: current.updateEvents,
      unsubscribeEvents: current.removeEvents
    }
  }, children);
}