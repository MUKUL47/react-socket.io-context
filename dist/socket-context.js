import { createContext } from "react";
export default class SocketContext {
  static #contexts = new Map();
  static createContext(id) {
    const context = /*#__PURE__*/createContext({
      data: null
    });
    this.#contexts.set(id, {
      context
    });
    return context;
  }
  static removeContext(id) {
    this.#contexts.delete(id);
  }
  static getContextById(id) {
    return this.#contexts.get(id);
  }
}