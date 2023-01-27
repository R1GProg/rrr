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

function addInitialPieces(board) {
}

function addPiece(board, x, y, player, type) {
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
	for(let i=0; i<alph.length(); i++){
		if(posY==alph[i]){
			posY = i.toString();
		}
  }

	if(board[posX-1][posY]!=null){
		return board[posX-1][posY];
	}
	return "empty";
}

function setSquareStateByAddress(board, posX, posY, value) {

}



//let piece = {player:1|2, type:<string>}


function movePiece(board, startPosX, startPosY, endPosX, endPosY) {
  // IF startPosX, startPosY, endPosX, endPosY ARE FROM 0e


  if (startPosX === endPosX || startPosY === endPosY) {
    console.log("can't move");
    return;
  }
  if (board.length < (endPosX +1) || board[0].length < (endPosY+1)) {
    console.log("can't move")
    return
  }
  if (board.length < (startPosX +1) || board[0].length < (startPosY+1)){
    console.log("start pos > board size")
    return
  }
  board[endPosX][endPosY] = board[startPosX][startPosY];
  board[startPosX][startPosY] = null;
}

function enumerateMoves(board, x, y, piece) {
  // Returns array of legal moves: [{x:int, y:int, capture:bool}]
}

function enumerateMovesByDelta(board, x, y, player, dx, dy, onlyOnce) {
  // Returns array of legal moves, when moving by adding (dx, dy): [{x:int, y:int, capture:bool}]
  const moves = [];

  while (true) {
    moves.push({x:0, y:0, capture:false});
    return moves;
  }
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

// Test code

const board = initBoard(8, 8);
addPiece(board, 4, 3, 1, 'R');
addPiece(board, 4, 6, 2, 'K');
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