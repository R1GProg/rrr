class SimpleEvent {
  constructor() {
    this.eventHandlers = {};
  }

  addEventListener(eventType, eventHandler) {
    // Create this type, if it doesn't allready exist!
    if (!this.eventHandlers[eventHandler]) {
      this.eventHandlers[eventType] = [];
    }
    
    // We add a function (eventHandler) to the specified event type array
    this.eventHandlers[eventType].push(eventHandler);
  }
    
  dispatchEvents(eventType, eventInfo) {
    // Call each function (eventHandler) of the specified event type and with the eventInfo parameter
    this.eventHandlers[eventType].forEach(eh => eh(eventInfo));
  }
}

class ChessboardR extends SimpleEvent {
  constructor(container) {
    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;

    this.eventHandlers = {
      move: []
    };
  }

  drawBoard() {
    const board = document.getElementById('board')

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const xmlns = "http://www.w3.org/2000/svg";
        cx = document.createElementNS(xmlns, "rect");
        cx.setAttribute("x", 20+x*60);
        cx.setAttribute("y", 20+y*60);
        cx.setAttribute("height", 60);
        cx.setAttribute("width", 60);
        cx.setAttribute("class", "square");
      }
    }
  }

  move(txtMove) {
    this.triggerEvent('move', txtMove);
  }

  update(model) {
    
    
  }

}