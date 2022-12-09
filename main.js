class Ball{
    constructor(color){
        this.color = color
    }

    createXYR(){
        this.x = Math.random() * 600
        this.y = Math.random() * 300
        this.r = Math.random() * 50
    }

    createMe() {
        
        const xmlns = "http://www.w3.org/2000/svg";
        this.cx = document.createElementNS(xmlns, "circle");
        this.cx.setAttribute("class", "bumba");
        this.cx.setAttribute("style", `fill:${this.color}`)
        this.cx.setAttribute("cx", this.x);
        this.cx.setAttribute("cy", this.y);
        this.cx.setAttribute("r", this.r);
        canvas = document.getElementById("canvas")
        canvas.appendChild(this.cx)
    }

    removeMe(){
        this.cx.remove()
        delete this.cx
    }
}



function nameChange(){
    obj1.name = document.getElementById("OPn").value
    obj1.draw()
}

const bumbas = []

function createBumba(){
    bumba = new Ball(document.getElementById("color").value)
    bumbas.push(bumba)
    bumba.createXYR()
    bumba.createMe()
}

function changeAllNames(){
    bumbas.forEach(bumba =>{
        bumba.removeMe()
        bumba.color = document.getElementById("color").value
        bumba.createMe()
    })
    console.log(bumbas)
}