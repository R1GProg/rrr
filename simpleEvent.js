class SimpleEvent {
  constructor() {
    this.eventHandlers = {};
  }

  addEventListener(eventType, eventHandler) {
    if (!this.eventHandlers[eventType]) {
      this.eventHandlers[eventType] = [];
    }
    this.eventHandlers[eventType].push(eventHandler);
  }

  dispatchEvent(eventType) {
    if (this.eventHandlers[eventType] != undefined) {
      this.eventHandlers[eventType].forEach((eh) => eh(this));
    }
  }
}
