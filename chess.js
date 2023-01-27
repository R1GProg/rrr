function init_board(width, height) {
  let board = new Array(width);

  for (let x = 0; x < width; x++) {
      board[x] = new Array(height);

      for (let y = height - 1; y >= 0; y--) {
          board[x][y] = null;
      }
  }

  return board;
}

function add_piece(board, player, type, x, y) {
  board[x][y] = {player, type};
}

const board = init_board(3, 4);
add_piece(board, null, null, 1, 1);
console.log(board);

function getSquareState(board, posX, posY) {
  return board[posX][posY];
}

function getSquareStateByAddress(board, pos) {

}

function setSquareStateByAddress(board, posX, posY, value) {

}

function setSquareStateByAddress(board, pos, value) {

}

//let piece = {player:1|2, type:<string>}

function movePiece(board, startPosX, startPosY, endPosX, endPosY) {

}

function printBoard(board) {
  console.log("..T");
}
