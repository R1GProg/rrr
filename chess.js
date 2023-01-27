const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getSquareState(board, posX, posY) {}

function getSquareStateByAddress(board, pos) {}

function setSquareStateByAddress(board, posX, posY, value) {}

function setSquareStateByAddress(board, pos, value) {}

//let piece = {player:1|2, type:<string>}

function movePiece(board, startPosX, startPosY, endPosX, endPosY) {
  // IF startPosX, startPosY, endPosX, endPosY ARE FROM 0


  if (startPosX === endPosX || startPosY === endPosY) {
    console.log("can't move");
    return;
  }
  if (board.length < (endPosX +1) || board[0].length < (endPosY+1)) {
    console.log("can't move")
  }
  if (board.length < (startPosX +1) || board[0].length < (startPosY+1)){
    console.log("start pos > board size")
  }
}

function printBoard(board) {
  console.log("..T");
}

movePiece(board, 1, 1, 2, 2);
