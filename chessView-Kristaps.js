class ChessboardK {
  constructor(container) {
    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;

    this.eventHandlers = {
      move: []
    };
  }

  addEventListener(eventType, eventHandler) {
    this.eventHandlers[eventType].push(eventHandler);
  }

  triggerEvent(eventType, eventInfo) {
    this.eventHandlers[eventType].forEach(eh => eh(eventInfo));
  }

  move(txtMove) {
    this.triggerEvent('move', txtMove);
  }

  update(model) {
    console.log(model);
  }

}
