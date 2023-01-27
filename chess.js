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
//     https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
function loadPositionFromFen(board, fenStr) {
  posFen = fenStr.split(' ');

  let x = 0;
  let y = 0;
  for (let i = 0, len = posFen[0].length; i < len; i++) {
    c = posFen[0][i];
    cc = c.charCodeAt(0);
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
      const type = c;
      board[x][y] = {player, type};
      x++;
    }
  }
}

function addPiece(board, player, type, x, y) {
  board[x][y] = {player, type};
}

const board = initBoard(8, 8);
loadPositionFromFen(board, "rnbqkbnr/pppppppp/3r5/8/8/8/PPPPPPPP/RNBQKBNR");
//movePiece(board, 1, 1, 2, 2);
//console.log(board);
printBoard(board);

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


movePiece(board, 1, 1, 2, 2);
