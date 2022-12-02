class Transformer {
    constructor(name,img){
        this.name = name
        this.img = img
    }
}

const objects = []

objects[0] = obj1 = new Transformer("Optimus Prime","https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/7725af3d4fcc85f27b919beeb16ddc37.png")
objects[1] = obj2 = new Transformer("Bumblebee", "https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/d9448df28e3cbd747952a4abac005000.png")
objects[2] = obj3 = new Transformer("Windblade", "https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/250ac54040fbbebffeafb70e03a642f2.png")

objects.forEach(obj => {
    img = document.createElement("img")
    img.setAttribute("width","500px") 
    img.setAttribute("heigth","500px") 
    img.setAttribute("src",obj.img)
    text = document.createElement("p")
    text.innerHTML = obj.name
    
    
    document.querySelector("div").appendChild(img)
    document.querySelector("div").appendChild(text)
});