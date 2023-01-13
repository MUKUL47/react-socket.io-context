"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _socketContextProvider = require("./socket-context-provider");
Object.keys(_socketContextProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _socketContextProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _socketContextProvider[key];
    }
  });
});
var _getSocketContext = require("./get-socket-context");
Object.keys(_getSocketContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getSocketContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getSocketContext[key];
    }
  });
});