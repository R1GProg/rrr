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

class ChessBoardR extends SimpleEvent {
  constructor(container, size=60) {
    super();

    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;
    this.size = size;

    this.pieceImages = {
      "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "R": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "Q": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
      "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
    };

    this.eventHandlers = {
      move: []
    };
  }

  drawBoard() {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const xmlns = "http://www.w3.org/2000/svg";
        const square = document.createElementNS(xmlns, "rect");
        square.setAttribute("x", 20+x*this.size);
        square.setAttribute("y", 20+y*this.size);
        square.setAttribute("height", this.size);
        square.setAttribute("width", this.size);
        // square.setAttribute("style", "fill: red")

        if ((x+y) % 2 == 0) {
          square.setAttribute("class", "WhiteSquare");
        } else {
          square.setAttribute("class", "BlackSquare");
        }

        this.container.appendChild(square);
      }
    }
  }

  drawPieces(board) {
    for (let i = 0; i < board.length; i++) {
      
    }
  }

  drawPiece(x, y) {
    const xmlns = "http://www.w3.org/2000/svg";
    const piece = document.createElementNS(xmlns, "image");
    piece.setAttribute("href", "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg");
    piece.setAttribute("x", 20+x*this.size);
    piece.setAttribute("y", 20+y*this.size);
    piece.setAttribute("width", 60);
    piece.setAttribute("height", 60);

    this.container.appendChild(piece);
  }

  move(txtMove) {
    this.triggerEvent("move", txtMove);
  }

  update(model) {
    this.drawBoard();
    this.drawPiece(2, 2);
    console.log("here");
  }
}