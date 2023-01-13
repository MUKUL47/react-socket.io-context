"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSocketContext;
var _react = require("react");
var _socketContext = _interopRequireDefault(require("./socket-context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getSocketContext(socketContextId) {
  const socketContext = _socketContext.default.getContextById(socketContextId);
  if (!socketContext) {
    throw new Error("Socket context not found");
  }
  return (socketContext === null || socketContext === void 0 ? void 0 : socketContext.context) || {};
}