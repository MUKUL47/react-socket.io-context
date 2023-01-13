"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
class SocketContext {
  static createContext(id) {
    const context = /*#__PURE__*/(0, _react.createContext)({
      data: null
    });
    _classStaticPrivateFieldSpecGet(this, SocketContext, _contexts).set(id, {
      context
    });
    return context;
  }
  static removeContext(id) {
    _classStaticPrivateFieldSpecGet(this, SocketContext, _contexts).delete(id);
  }
  static getContextById(id) {
    return _classStaticPrivateFieldSpecGet(this, SocketContext, _contexts).get(id);
  }
}
exports.default = SocketContext;
var _contexts = {
  writable: true,
  value: new Map()
};