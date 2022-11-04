function sayHello() {
  //alert("Hello, bro");
  //document.getElementById("lielais").innerHTML = "Hacked!!!";
  const cont = document.getElementById("container"); // DOM
  for (let i = 0; i < 5; i++) {
    /*
    kx = document.createElement("div");
    kx.setAttribute("class", "kaste");
    kx.innerHTML = i;
    */
    const xmlns = "http://www.w3.org/2000/svg";
    cx = document.createElementNS(xmlns, "circle");
    cx.setAttribute("cx", Math.random() * 600);
    cx.setAttribute("cy", Math.random() * 300);
    cx.setAttribute("r", Math.random() * 50);
    cx.setAttribute("class", "bumba");

    /*
    <line>
    <rect>
    <ellipse>
    <path>
    <polygon>
    <polyline>
    */

    cont.appendChild(cx);
  }

  moveIt();
}

function sayGoAway() {
  alert("Blast off, bro");
}