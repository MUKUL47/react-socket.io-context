import { io } from "socket.io-client";
export default class SocketService {
  socket;
  #events = new Set();
  #cb = () => {};
  constructor({ url, options = {} }) {
    this.socket = io(url, options);
  }

  onEventResponse({ events, cb }) {
    this.#cb = cb;
    this.#events = new Set(events);
    this.#addListener(this.#events);
  }

  updateEvents(newEvents) {
    const uniqueEvents = newEvents.filter(
      (newEvent) => !this.#events.has(newEvent)
    );
    if (uniqueEvents.length === 0) return;
    this.#events = new Set([...Array.from(this.#events), ...uniqueEvents]);
    this.#addListener(uniqueEvents);
  }

  removeEvents(events) {
    events.forEach((e) => this.socket.off(e, this.#cb));
  }

  #addListener = (events) => {
    events.forEach((e) => this.socket.on(e, (data) => this.#cb?.(e, data)));
  };

  sentEvent = (event, data) => {
    this.socket.emit(event, data);
  };

  getSocket() {
    return this.socket;
  }
}
