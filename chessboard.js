class Chessboard {
  constructor(container) {
    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;
  }
  update(model) {
    var englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("width", model.width * 50);
    svg.setAttribute("height", model.height * 50);

    this.container.appendChild(svg);

    let green = false;

    for (let i = 0; i < model.width; i++) {
      for (let j = 0; j < model.height; j++) {
        if (i === 0){
          const p = document.createElement("p")
          p.innerHTML = model.height - j
          p.style.position = "absolute"
          p.style.top = `${j * 50 + 10}px`
          p.style.left = `125px`
          this.container.appendChild(p)
        }

        if (j === model.height-1){
          const p = document.createElement("p")
          p.innerHTML = englishAlphabet[i]
          p.style.position = "absolute"
          p.style.top = `${j * 50 + 30}px`
          p.style.left = `${i * 50 + 155}px`
          this.container.appendChild(p)
        }

        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("width", "50px");
        rect.setAttribute("height", "50px");
        rect.setAttribute("x", i * 50);
        rect.setAttribute("y", j * 50);
        rect.setAttribute("id", `rect-${i}-${j}`)
        if (green) {
          rect.style.fill = "#799658";
        } else {
          rect.style.fill = "#eeeed3"
        } 
        green = !green;
        svg.appendChild(rect);
      }
      green = !green;
    }

    /*
    <svg width="400" height="100">
      <rect width="400" height="100" 
      style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
    </svg>*/
  }
}
