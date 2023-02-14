class Chessboard {
  constructor(container) {
    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  }

  update(model) {
    var englishAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    this.svg.setAttribute("width", model.width * 50);
    this.svg.setAttribute("height", model.height * 50);

    this.container.appendChild(this.svg);

    let green = false;

    for (let i = 0; i < model.width; i++) {
      for (let j = 0; j < model.height; j++) {
        if (i === 0) {
          const p = document.createElement("p");
          p.innerHTML = model.height - j;
          p.style.position = "absolute";
          p.style.top = `${j * 50 + 10}px`;
          p.style.left = `125px`;
          this.container.appendChild(p);
        }

        if (j === model.height - 1) {
          const p = document.createElement("p");

          p.innerHTML = englishAlphabet[i];
          p.style.position = "absolute";
          p.style.top = `${j * 50 + 30}px`;
          p.style.left = `${i * 50 + 155}px`;
          this.container.appendChild(p);
        }

        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("width", "50px");
        rect.setAttribute("height", "50px");
        rect.setAttribute("x", i * 50);
        rect.setAttribute("y", j * 50);
        rect.setAttribute("id", `rect-${i}-${j}`);
        if (green) {
          rect.style.fill = "#799658";
        } else {
          rect.style.fill = "#eeeed3";
        }
        green = !green;
        this.svg.appendChild(rect);
      }
      green = !green;
    }
  }

  //svg figures from wikipedia after saved to json using this code:
  /* k = document.getElementById("k1");
    q = document.getElementById("q1");
    r = document.getElementById("r1");
    b = document.getElementById("b1");
    n = document.getElementById("n1");
    p = document.getElementById("p1");

    const obj = {
      k: k.outerHTML,
      q: q.outerHTML,
      r: r.outerHTML,
      b: b.outerHTML,
      n: n.outerHTML,
      p: p.outerHTML,
    };

    const jsonStr = JSON.stringify(obj); 
    const filename = 'myfile.json'; 

    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/

  DrawPiece(piece, x, y) {
    let piecesBlack = {};

    fetch("black.json")
      .then((response) => response.json())
      .then((data) => {
        piecesBlack = data;

        const obj = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        obj.innerHTML = piecesBlack[piece.type];
        console.log(obj.transform);
        this.svg.appendChild(obj);
      })
      .catch((error) => {
        console.error("ERROR READING JSON FILE: ", error);
      });
  }
}
