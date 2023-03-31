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

  dispatchEvent(eventType, eventInfo) {
    if (this.eventHandlers[eventType] != undefined) {
      if (eventInfo == undefined) {
        this.eventHandlers[eventType].forEach((eh) => eh(this));
      }else {
        this.eventHandlers[eventType].forEach((eh) => eh(eventInfo));
      }
    }
  }
}
