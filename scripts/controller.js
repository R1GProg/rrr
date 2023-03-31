window.addEventListener("load", (event) => {
  const b = new Board(8, 8);

  const ch = new Chessboard(document.getElementById("containerMS"));

  b.addEventListener("update", (board) => ch.update(board));

  ch.addEventListener("move", (txtMove) => b.movePieceTxt(txtMove));
  ch.addEventListener("check_moves", (e) => {
    console.log(e)
    e.target.recolor_rects(b.enumerateMoves(e.x, e.y, e.p))
    
  });

  b.loadPositionFromFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  document.getElementById("btnMakeMove").addEventListener("click", (e) => {
    //console.log(document.getElementById("move").value);
    ch.model_move(document.getElementById("move").value);
  });
});
