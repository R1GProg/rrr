class Transformer {
    constructor(name,src){
        this.name = name
        this.src = src
    }

    draw() {
        if (!this.img){
            this.img = document.createElement("img")
            document.querySelector("div").appendChild(this.img)
        }

        if (!this.text){
            this.text = document.createElement("p")
            document.querySelector("div").appendChild(this.text)
        }
            
        this.img.setAttribute("width","500px") 
        this.img.setAttribute("heigth","500px") 
        this.img.setAttribute("src",this.src)
        
        this.text.innerHTML = this.name
        
        
        
        
    }
}

const objects = []

obj1 = new Transformer("Optimus Prime","https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/7725af3d4fcc85f27b919beeb16ddc37.png")
obj2 = new Transformer("Bumblebee", "https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/d9448df28e3cbd747952a4abac005000.png")
obj3 = new Transformer("Windblade", "https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/250ac54040fbbebffeafb70e03a642f2.png")

obj1.draw()
obj3.draw()
obj2.draw()

obj1.name = "lll"
obj1.draw()
