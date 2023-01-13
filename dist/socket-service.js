"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.weak-map.js");
var _socket = require("socket.io-client");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _events = /*#__PURE__*/new WeakMap();
var _cb = /*#__PURE__*/new WeakMap();
var _addListener = /*#__PURE__*/new WeakMap();
class SocketService {
  constructor(_ref) {
    let {
      url
    } = _ref;
    _defineProperty(this, "socket", void 0);
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: new Set()
    });
    _classPrivateFieldInitSpec(this, _cb, {
      writable: true,
      value: () => {}
    });
    _classPrivateFieldInitSpec(this, _addListener, {
      writable: true,
      value: events => {
        events.forEach(e => this.socket.on(e, data => {
          var _classPrivateFieldGet2;
          return (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _cb)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.call(this, e, data);
        }));
      }
    });
    _defineProperty(this, "sentEvent", (event, data) => {
      this.socket.emit(event, data);
    });
    this.socket = (0, _socket.io)(url);
  }
  onEventResponse(_ref2) {
    let {
      events,
      cb
    } = _ref2;
    _classPrivateFieldSet(this, _cb, cb);
    _classPrivateFieldSet(this, _events, new Set(events));
    _classPrivateFieldGet(this, _addListener).call(this, _classPrivateFieldGet(this, _events));
  }
  updateEvents(newEvents) {
    const uniqueEvents = newEvents.filter(newEvent => !_classPrivateFieldGet(this, _events).has(newEvent));
    if (uniqueEvents.length === 0) return;
    _classPrivateFieldSet(this, _events, new Set([...Array.from(_classPrivateFieldGet(this, _events)), ...uniqueEvents]));
    _classPrivateFieldGet(this, _addListener).call(this, uniqueEvents);
  }
  removeEvents(events) {
    events.forEach(e => this.socket.off(e, _classPrivateFieldGet(this, _cb)));
  }
  getSocket() {
    return this.socket;
  }
}
exports.default = SocketService;