const board = [[{type:'A'}, null, null],[null, {type:'B'}, null],[null, null, {type:'C'}]];

function getSquareState(board, posX, posY) {

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
  const sizeX = board.length;
  const sizeY = board[0].length;
  for (let y = 0; y < sizeY; y++) {
    let row = '';
    for (let x = 0; x < sizeX; x++) {
      const squareState = board[x][sizeY - y - 1];
      row += squareState ? squareState.type : '.';
    }
    console.log(row);
  }
}

printBoard(board);
