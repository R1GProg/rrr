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

function addPiece(board, player, type, x, y) {
  board[x][y] = {player, type};
}

const board = initBoard(3, 4);
addPiece(board, null, null, 1, 1);
movePiece(board, 1, 1, 2, 2);
console.log(board);

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

function setSquareStateByAddress(board, pos, value) {

}

//let piece = {player:1|2, type:<string>}

function movePiece(board, startPosX, startPosY, endPosX, endPosY) {
  board[endPosX][endPosY] = board[startPosX][startPosY];
  board[startPosX][startPosY] = null;
}

function printBoard(board) {
  console.log("..T");
}
