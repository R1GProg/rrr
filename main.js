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
}

function sayGoAway() {
  alert("Blast off, bro");
}

function bumbinator(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const borderWidth = 10;
  const x = e.clientX - rect.left - borderWidth; 
  const y = e.clientY - rect.top - borderWidth;

  const cont = document.getElementById("container");
  const xmlns = "http://www.w3.org/2000/svg";
  cx = document.createElementNS(xmlns, "circle");
  cx.setAttribute("cx", x);
  cx.setAttribute("cy", y);
  cx.setAttribute("r", Math.random() * 50);
  cx.setAttribute("class", "bumba");
  cx.setAttribute("style", "fill:red");
  cont.appendChild(cx);
}

let bumbaX = 100;
let laiks = new Date();

function initAnim() {
  bumbaX = 100;
  laiks = new Date();
}

function anim() {
  const c = document.getElementById("anima");
  const tagad = new Date();
  const cx = bumbaX + (tagad.getTime() - laiks.getTime()) / 100; 
  c.setAttribute("cx", cx);
  if (cx <= 300) setTimeout(anim, 10);
}

class Ball {
  constructor(color, x, y, r) {
    // invoked when calling new Ball(...)
    const xmlns = "http://www.w3.org/2000/svg";
    const c = document.createElementNS(xmlns, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute("class", "bumba");
    c.setAttribute("style", `fill:${color}`); // String interpolation
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = c;
  }
  insert(containerId) {
    const cont = document.getElementById(containerId); // DOM
    cont.appendChild(this.body);
  }
  remove() {
    this.body.remove();
    delete this.body;
  }
  setX(x) {
    this.x = x;
    this.body.setAttribute("cx", x);
  }
  setY(y) {
    this.y = y;
    this.body.setAttribute("cy", y);
  }
  setR(r) {
    this.r = r;
    this.body.setAttribute("r", r);
  }
}
