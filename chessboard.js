class Chessboard {
  constructor(container) {
    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;
  }
  update(model) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("width", model.width * 50);
    svg.setAttribute("height", model.height * 50);

    this.container.appendChild(svg);

    let green = false;

    for (let i = 0; i < model.width; i++) {
      for (let j = 0; j < model.height; j++) {
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
