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

const form = document.querySelector(".form");
const inputCategoria = document.querySelector(".categoria");
const remeras = document.querySelector("#remeras");
const shorts = document.querySelector("#shorts");
const zapatillas = document.querySelector("#zapatillas");
const body = document.querySelector("body")
const modoOscuro = document.querySelector("#modoOscuro");

console.log(remeras, shorts, zapatillas, form)

form.onsubmit = (event) => {
    event.preventDefault()
    if (inputCategoria.value === "remeras"){
        remeras.innerHTML = `<h2 class="subtitulo">Remeras:</h2>

        <div class="fotoPadre">
            <div class="fotoUno">
                <img class="foto" src="./imagenes/camisetaChicago.jpg" alt="remera chicago bulls">
                <figcaption class="pieDeFoto">Remera chicago bulls original de jordan </figcaption>
                <p>$15.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>
            </div>

            <div class="fotoDos">
                <img class="foto" src="./imagenes/remeraRaptors.jpg" alt="remera de los raptors">
                <figcaption class="pieDeFoto">Remera retro toronto raptors de vince carter</figcaption>
                <p>$17.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>`
    }
    else if (inputCategoria.value === "shorts"){
        shorts.innerHTML = `<h2 class="subtitulo">Shorts:</h2>

        <div class="fotoPadre">
            <div class="fotoUno">
                <img class="foto" src="./imagenes/shortArgentina.jpg" alt="short de argentina">
                <figcaption class="pieDeFoto">Short original de la seleccion argentina</figcaption>
                <p>$12.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>
            </div>

            <div class="fotoDos">
                <img class="foto" src="./imagenes/shortNuggets.jpg" alt="short de denver nuggets">
                <figcaption class="pieDeFoto">Short original de los denver nuggets</figcaption>
                <p>$13.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>`
    }
    else if(inputCategoria.value === "zapatillas"){
        zapatillas.innerHTML = `<h2 class="subtitulo">Zapatillas:</h2>

        <div class="fotoPadre">
            <div class="fotoUno">
                <img class="foto" src="./imagenes/zapatillaJordan.png" alt="zapatillas jordan">
                <figcaption class="pieDeFoto">Zapatillas nike jordan 1 low travis scott</figcaption>
                <p>$40.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>
                
            </div>

            <div class="fotoDos">

                <img class="foto" id="zapatilla" src="./imagenes/zapatillasKyrie.jpg" alt="zapatillas kyrie">
                <figcaption class="pieDeFoto">Zapatillas kyrie 5 edicion bob esponja</figcaption>
                <p>$35.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin" type="button">Agregar al carrito</button>
                </div>

            </div>
        </div>`

    }
}



let oscuro
 
modoOscuro.addEventListener("click", (oscuro) =>{


    body.classList.toggle("oscuro") 

    if(body.classList.contains("oscuro")){
        modoOscuro.textContent = "Modo claro"
        oscuro = true;
        const modoOscuroJason = JSON.stringify(oscuro)
        localStorage.setItem("modoOscuro", modoOscuroJason);
    
    }
    else{
        modoOscuro.textContent = "Modo oscuro"
        oscuro = false;
        const modoOscuroJason = JSON.stringify(oscuro)
        localStorage.setItem("modoOscuro", modoOscuroJason);
    }
    
})



const getModoOscuro = localStorage.getItem("modoOscuro")
const modoOscuroParseado = JSON.parse(getModoOscuro)

if(modoOscuroParseado === true){
    body.classList.toggle("oscuro")
}



// fetch

const btnEnvio = document.querySelector(".btnEnvio")

btnEnvio.addEventListener('click',()=>{
    event.preventDefault()
    Swal.fire({
      title: 'Los datos fueron enviados con exito, muchas gracias',
      width: 600,
      padding: '3em',
      color: '#716add',
     
    })
  })



let usuario = {
    id: 155,
    title: "prueba",
    body: "post de prueba",
}

const envio = () =>{
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    header:{'content-type':'application/json; charset=UTF-8'},
    body: JSON.stringify(usuario)
  })
      .then(response =>response.json())
      .then(result => console.log(result))

}

envio.onclick = ()=>{
  finCompra();
}




