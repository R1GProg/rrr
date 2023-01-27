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
  posFen = fenStr.split(' ');

  let x = 0;
  let y = 0;
  for (let i = 0, len = posFen[0].length; i < len; i++) {
    const c = posFen[0][i];
    const cc = c.charCodeAt(0);
    // Check if there is a new row
    if (c == "/") {
      x = 0
      y++;
    }
    // Check if it's a number
    else if (cc > 47 && cc < 58) {
      x += parseInt(c);
    }
    else {
      const player = (cc > 96 && cc < 123) + 1;
      const type = c.toUpperCase();
      board[x][y] = {player, type};
      x++;
    }
  }
}

function addPiece(board, player, type, x, y) {
  board[x][y] = {player, type};
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

function setSquareStateByAddress(board, posX, posY, value) {

}

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

function enumerateMoves(board, x, y, piece) {
  const moves = [];
  // Returns array of legal moves: [{x:int, y:int, capture:bool}]


  

  if (piece.type === "R") {
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, -1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 0, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 0, false));
  }

  if (piece.type === "K"){
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, -1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 0, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 0, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, -1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, -1, true));
  }

  if (piece.type === "B"){
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, -1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, -1, false));
  }

  if (piece.type === "Q"){
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, -1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 0, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 0, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, -1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 1, false));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, -1, false));
  }

  if (piece.type === "P"){
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 0, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 1, true));
  }

  if (piece.type === "N"){
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 2, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 2, -1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -2, 1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -2, -1, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, 2, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, 2, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, 1, -2, true));
    moves.concat(enumerateMovesByDelta(board, x, y, piece.player, -1, -2, true));
  }

  return moves;

  //byDelta = enumerateMovesByDelta(board, 4, 3, 1, 0, 1,null)
}

function enumerateMovesByDelta(board, x, y, player, dx, dy, onlyOnce) {
  // Returns array of legal moves, when moving by adding (dx, dy): [{x:int, y:int, capture:bool}]
  const moves = [];

  while (true) {
    moves.push({ x: 0, y: 0, capture: false });
    return moves;
  }
}

function printBoard(board) {
  const sizeX = board.length;
  const sizeY = board[0].length;
  for (let y = 0; y < sizeY; y++) {
    let row = "";
    for (let x = 0; x < sizeX; x++) {
      const squareState = board[x][sizeY - y - 1];
      row += squareState ? squareState.type : ".";
    }
    console.log(row);
  }
}

// Test code

const board = initBoard(8, 8);
loadPositionFromFen(board, "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
//addPiece(board, 4, 3, 1, 'R');
//addPiece(board, 4, 6, 2, 'K');
printBoard(board);
const rookUp = enumerateMovesByDelta(board, 4, 3, 1, 0, 1);
/*
expected: [
  {x:4, y:4, capture:false},
  {x:4, y:5, capture:false},
  {x:4, y:6, capture:true},
]
*/
console.log(rookUp);

/*
addPiece(board, null, null, 1, 1);
movePiece(board, 1, 1, 2, 2);
console.log(board);
printBoard(board);

movePiece(board, 1, 1, 2, 2);
printBoard(board);
*/
