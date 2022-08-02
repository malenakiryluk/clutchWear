function Producto (categoria, nombre, color, precio){
    this.categoria = categoria
    this.nombre = nombre;
    this.color = color;
    this.precio = Number(precio);
}

const remera = new Producto ("remera", "remera chicago bulls", "rojo", "15000")
const remera2 = new Producto ("remera", "remera toronto raptors", "blanco", "17000")
const short = new Producto ("short","short denver nuggets", "azul", "13000")
const short2 = new Producto ("short","short selccion argentina", "celeste", "12000")
const zapatilla = new Producto ("zapatilla", "jordan 1 travis scott", "marron", "40000")
const zapatilla2 = new Producto ("zapatilla", "kyrie 5 bob esponja", "amarillo", "35000")

const productos = [remera, remera2, short, short2, zapatilla, zapatilla2];

const categoria = prompt("Hola bienvendioa clutchwear, que esta buscando?")
const remeras = document.querySelector("#remeras")
const shorts = document.querySelector("#shorts")
const zapatillas = document.querySelector("#zapatillas")

const catProducto = (productos, categoria) => {

    if(categoria === "remeras"){
        const remeras = productos.filter( (elemento) => {
            return elemento.categoria === "remera"
        })
        
        shorts.classList.toggle("block")
        zapatillas.classList.toggle("block")
        console.log(remeras)

    }
    else if(categoria === "shorts"){
        const shorts = productos.filter( (elemento) => {
            return elemento.categoria === "short"
        })

        remeras.classList.toggle("block")
        zapatillas.classList.toggle("block")
        console.log(shorts)

        
    }
    else if(categoria === "zapatillas"){
        const zapatillas = productos.filter( (elemento) => {
            return elemento.categoria === "zapatilla"
        })

        remeras.classList.toggle("block")
        shorts.classList.toggle("block")
        console.log(zapatillas)

        
    }
    else{
        console.log("no contamos con ese producto :(")
    }
}

catProducto(productos, categoria);