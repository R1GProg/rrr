const board = [[null, null, null],[null, null, null],[null, null, null]];

function getSquareState(board, posX, posY) {

}

function getSquareStateByAddress(board, pos) {
  const text1 = text.split(text.charAt(1));
	let posX = text1[0];
	const text2 = text.split(text.charAt(0));
	let posY = text2[1];
	const alph[] = {A, B, C, D, E, F, G, H, I};
	for(int i=0;i<alph.length();i++){
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

}

function printBoard(board) {
  console.log("..T");
}
