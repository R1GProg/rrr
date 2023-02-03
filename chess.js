function initBoard(width, height) {
  let board = new Array(width);

  for (let x = 0; x < width; x++) {
    board[x] = new Array(height);

    for (let y = 0; y < height; y++) {
      board[x][y] = null;
    }
  }
  return board;
}

// Load the board using fen notation
//     https://en.wikipedia.org/wiki/Forsyth-Edwards_Notation
//
// Of course this is useless if we want 4 player chess!?!?!?! :D -> :O
function loadPositionFromFen(board, fenStr) {
  posFen = fenStr.split(" ");

  let x = 0;
  let y = 0;
  for (let i = 0, len = posFen[0].length; i < len; i++) {
    const c = posFen[0][i];
    const cc = c.charCodeAt(0);
    // Check if there is a new row TODO:
    if (c == "/") {
      x = 0;
      y++;
    }
    // Check if it's a number
    else if (cc > 47 && cc < 58) {
      x += parseInt(c);
    } else {
      const player = (cc > 96 && cc < 123) + 1;
      const type = c.toUpperCase();
      board[x][y] = { player, type };
      x++;
    }
  }
}

function addPiece(board, x, y, player, type) {
  board[x][y] = { player, type };
}

function getSquareState(board, posX, posY) {
  return board[posX][posY];
}

function getSquareStateByAddress(board, pos) {
  const text1 = text.split(text.charAt(1));
  let posX = text1[0];
  const text2 = text.split(text.charAt(0));
  let posY = text2[1];
  const alph = [A, B, C, D, E, F, G, H, I];
  for (let i = 0; i < alph.length(); i++) {
    if (posY == alph[i]) {
      posY = i.toString();
    }
  }

  if (board[posX - 1][posY] != null) {
    return board[posX - 1][posY];
  }
  return "empty";
}

function setSquareStateByAddress(board, posX, posY, value) {}

function movePiece(board, startPosX, startPosY, endPosX, endPosY) {
  // IF startPosX, startPosY, endPosX, endPosY ARE FROM 0e

  if (startPosX === endPosX || startPosY === endPosY) {
    console.log("can't move");
    return;
  }
  if (board.length < endPosX + 1 || board[0].length < endPosY + 1) {
    console.log("can't move");
    return;
  }
  if (board.length < startPosX + 1 || board[0].length < startPosY + 1) {
    console.log("start pos > board size");
    return;
  }
  board[endPosX][endPosY] = board[startPosX][startPosY];
  board[startPosX][startPosY] = null;
}

// TODO: Later we should include Castling and En Pessant
function enumerateMoves(board, x, y, piece) {
  const moves = [];
  // Returns array of legal moves: [{x:int, y:int, capture:bool}]
  pieces = {
    R: {
      onlyOnce: false,
      moves: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 },
      ],
    },
    K: {
      onlyOnce: true,
      moves: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
      ],
    },
    Q: {
      onlyOnce: false,
      moves: [
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
      ],
    },
    P: {
      onlyOnce: true,
      moves: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: -1, y: 1 },
      ],
    }, //THERE WILL BE A LOT OF PROBLEMS
    B: {
      onlyOnce: false,
      moves: [
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
      ],
    },
    N: {
      onlyOnce: true,
      moves: [
        { x: 1, y: 2 },
        { x: -1, yT: 2 },
        { x: 2, y: 1 },
        { x: -2, y: 1 },
        { x: -1, y: -2 },
        { x: 1, y: -2 },
        { x: 2, y: -1 },
        { x: -2, y: -1 },
      ],
    },
  };

  onlyOnce = pieces[piece.type].onlyOnce;
  pieces[piece.type].moves.forEach((move) => {
    moves.push(
      ...enumerateMovesByDelta(
        board,
        x,
        y,
        piece.player,
        move.x,
        move.y,
        onlyOnce
      )
    );
  });

  return moves;

  //byDelta = enumerateMovesByDelta(board, 4, 3, 1, 0, 1,null)
}

function enumerateMovesByDelta(board, x, y, player, dx, dy, onlyOnce) {
  // Returns array of legal moves, when moving by adding (dx, dy): [{x:int, y:int, capture:bool}]
  const moves = [];
  let posX = x;
  let posY = y;
  const sizeX = board.length;
  const sizeY = board[0].length;
  while (true) {
    posX += dx;
    posY += dy;
    if (posX < 0 || posY < 0 || posX >= sizeX || posY >= sizeY) {
      return moves;
    }
    const squareState = getSquareState(board, posX, posY);
    if (squareState === null) {
      moves.push({ x: posX, y: posY, capture: false });
      continue;
    }
    if (squareState.player != player) {
      moves.push({ x: posX, y: posY, capture: true });
      return moves;
    }
    if (squareState.player == player) {
      return moves;
    }
    if (onlyOnce) {
      return moves;
    }
  }
}

function printBoard(board) {
  symbolsWhite = {
    K: "\u2654",
    Q: "\u2655",
    R: "\u2656",
    B: "\u2657",
    N: "\u2658",
    P: "\u2659",
  };
  symbolsBlack = {
    K: "\u265A",
    Q: "\u265B",
    R: "\u265C",
    B: "\u265D",
    N: "\u265E",
    P: "\u265F",
  };

  // TODO: show black pieces in lowercase
  // TODO: use terminal colors for square color
  // TODO: use unicode chars for pieces
  // TODO: show letter-number axis
  const sizeX = board.length;
  const sizeY = board[0].length;
  for (let y = 0; y < sizeY; y++) {
    let row = "";
    for (let x = 0; x < sizeX; x++) {
      const squareState = board[x][sizeY - y - 1];
      if ((x + y) % 2 == 0) {
        row += "\033[40m"; // black background
      } else {
        row += "\033[107m"; // white background
      }
      if (squareState && squareState.player === 1) {
        row += "\033[100m"; // black piece
      } else {
        row += "\033[47m"; // white piece
      }
      if (squareState != null) {
        //piece
        row += symbolsBlack[squareState.type];
      } else {
        // empty square
        row += " ";
      }
    }
    row += "\033[0m";
    console.log(row);
  }
}

// Test code

const board = initBoard(8, 8);
loadPositionFromFen(board, "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
addPiece(board, 4, 3, 1, "R");
//addPiece(board, 4, 6, 2, 'K');
printBoard(board);
const moves = enumerateMoves(board, 4, 3, getSquareState(board, 4, 3));
/*
expected: [
  {x:4, y:4, capture:false},
  {x:4, y:5, capture:false},
  {x:4, y:6, capture:true},
]
*/
console.log(moves);

/*
movePiece(board, 1, 1, 2, 2);
movePiece(board, 1, 1, 2, 2);
printBoard(board);
*/
