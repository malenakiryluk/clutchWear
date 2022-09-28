// fetch

let btnCompra = document.querySelector(".btnFinalizarCompra")
let formulario = document.querySelector(".formulario");

console.log(formulario, btnCompra)

btnCompra.addEventListener('click',()=>{
    event.preventDefault()
    Swal.fire({
      title: 'Los datos fueron enviados con exito, muchas gracias',
      width: 600,
      padding: '3em',
      color: '#716add',
     
    })
})





formulario.addEventListener('submit',function(e){
  e.preventDefault();

  let datos = new FormData(formulario)

  console.log(datos.get('email'))
  console.log(datos.get('address'))
  console.log(datos.get('city'))

  fetch("https://jsonplaceholder.typicode.com/users",{
    method : "POST",
    header:{'content-type':'application/json; charset=UTF-8'},
    body: JSON.stringify(datos)
  })
      .then(response =>response.json())
      .then(result => console.log(result))
})

/*let usuario = {
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
}*/