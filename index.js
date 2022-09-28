

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
            <div class="fotoUno item">
                <img class="foto" src="./imagenes/camisetaChicago.jpg" alt="remera chicago bulls">
                <figcaption class="pieDeFoto">Remera chicago bulls original de jordan </figcaption>
                <p>$15.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
                </div>
            </div>

            <div class="fotoDos item">
                <img class="foto" src="./imagenes/remeraRaptors.jpg" alt="remera de los raptors">
                <figcaption class="pieDeFoto">Remera retro toronto raptors de vince carter</figcaption>
                <p>$17.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>`
    }
    else if (inputCategoria.value === "shorts"){
        shorts.innerHTML = `<h2 class="subtitulo">Shorts:</h2>

        <div class="fotoPadre">
            <div class="fotoUno item">
                <img class="foto" src="./imagenes/shortArgentina.jpg" alt="short de argentina">
                <figcaption class="pieDeFoto">Short original de la seleccion argentina</figcaption>
                <p>$12.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
                </div>
            </div>

            <div class="fotoDos item">
                <img class="foto" src="./imagenes/shortNuggets.jpg" alt="short de denver nuggets">
                <figcaption class="pieDeFoto">Short original de los denver nuggets</figcaption>
                <p>$13.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
                </div>
            </div>
        </div>`
    }
    else if(inputCategoria.value === "zapatillas"){
        zapatillas.innerHTML = `<h2 class="subtitulo">Zapatillas:</h2>

        <div class="fotoPadre">
            <div class="fotoUno item">
                <img class="foto" src="./imagenes/zapatillaJordan.png" alt="zapatillas jordan">
                <figcaption class="pieDeFoto">Zapatillas nike jordan 1 low travis scott</figcaption>
                <p>$40.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
                </div>
                
            </div>

            <div class="fotoDos item">

                <img class="foto" id="zapatilla" src="./imagenes/zapatillasKyrie.jpg" alt="zapatillas kyrie">
                <figcaption class="pieDeFoto">Zapatillas kyrie 5 edicion bob esponja</figcaption>
                <p>$35.000</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary color margin addCarrito" type="button">Agregar al carrito</button>
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





const agregarCarritoBtn = document.querySelectorAll(".addCarrito")
const carritoContent = document.querySelector(".carritoContent")
console.log( agregarCarritoBtn, carritoContent)
const itemConteiner = document.querySelector(".itemConteiner")

agregarCarritoBtn.forEach( agregarBtn => {

  agregarBtn.addEventListener('click', agregarCarritoClick)
})



function agregarCarritoClick(event){
  const btn = event.target;
  const item = btn.closest(".item");

  const itemNombre = item.querySelector(".pieDeFoto").textContent;
  const itemPrecio = item.querySelector("p").textContent;
  const itemFoto = item.querySelector('.foto').src;

  agregarAlCarrito(itemNombre, itemPrecio, itemFoto)
}


function agregarAlCarrito(itemNombre, itemPrecio,itemFoto){

  const carritoRow = document.createElement('div')

  const carritoContent =`<img src="${itemFoto} class="img-fluid foto" alt="zapatillas jordan 1 low travis scott">
  <figcaption class="pieDeFoto carritoColor">${itemNombre}</figcaption>
  <p class="carritoColor">${itemPrecio}</p>`

  carritoRow.innerHTML = carritoContent
  itemConteiner.append(carritoRow)
}

