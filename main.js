class Ball {
  constructor(color, x, y, r) {
    // invoked when calling new Ball(...)
    const xmlns = "http://www.w3.org/2000/svg";
    const c = document.createElementNS(xmlns, "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    //c.setAttribute("r", r);
    c.setAttribute("class", "bumba");
    //c.setAttribute("style", `fill:${color}`); // String interpolation
    this.body = c;
    this.x = x;
    this.y = y;
    this.color = color
    //this.r = r;
    this.r = r
    
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
  set r(r) {
    //this._r = r;
    this.body.setAttribute("r", r);
  }
  get r (){
    return Number(this.body.getAttribute("r"))

  }

  set color(color) {
    //this._r = r;
    this.body.setAttribute("style", `fill:${color}`);
  }
  get r (){
    return this.body.getAttribute("style", `fill:${color}`);

  }
}

const bumbas = []

function bumbinator(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const borderWidth = 10;
  const x = e.clientX - rect.left - borderWidth; 
  const y = e.clientY - rect.top - borderWidth;
  color = document.querySelector("#color").value
  size = document.querySelector("#size").value

  const b = new Ball(color,x,y,Number(size))
  b.insert("container")


  bumbas.push(b)

  /*const cont = document.getElementById("container");
  const xmlns = "http://www.w3.org/2000/svg";
  cx = document.createElementNS(xmlns, "circle");
  cx.setAttribute("cx", x);
  cx.setAttribute("cy", y);
  cx.setAttribute("r", Math.random() * 50);
  cx.setAttribute("class", "bumba");
  cx.setAttribute("style", "fill:red");
  cont.appendChild(cx);*/
}

function Change_all(){
  size = document.querySelector("#size").value
  color = document.querySelector("#color").value

  bumbas.forEach(b => {
    b.r = size
    b.color = color
  })
}