let inputText = document.getElementById("text-search-js")
let checkboxes = document.getElementById("filtro")
let container = document.getElementById("container")
let inputsNumber = document.getElementById("botonRango")
let carritoProductos = []
let productosStorage = localStorage.getItem("Medicamento")
productosStorage = JSON.parse(productosStorage)

let reinicio = document.getElementById("reiniciar")
async function mindyMedicamentos() {
    try {
        let datos = await fetch('https://apipetshop.herokuapp.com/api/articulos?tipo=Juguete')
        let products = await datos.json()
        let productos = products.response
        let medicamentos = tipo(productos,"Medicamento").sort((a,b) =>{ return a.stock -b.stock})
        cardCreator(medicamentos)
        // filtradoCheck(juguetes)

        inputsNumber.addEventListener("click", () => { range(medicamentos) })

        inputText.addEventListener("keyup", () => {
             filtroText(range(medicamentos), inputText.value)
        })
        
    }
    catch (error) {
        console.log(error);
    }

}
mindyMedicamentos()
/// funcion que filtra por tipo de producto
function tipo(array, propiedad) {

    let filtrado = array.filter(array => array.tipo == [propiedad])
    return (filtrado)

}
// Funcion para agregar un evento al icono del carrito
function eventoComprar(contenedorClass,array) {
    let botonCarrito = document.querySelectorAll(contenedorClass)
        botonCarrito.forEach( e => {
            e.addEventListener("click", (e) =>{
                
                const botonTarget = e.target
                
              
                let productoFiltrado = []
                productoFiltrado  = array.filter(e => { 
                    return e._id === botonTarget.id})
                console.log(productoFiltrado);
                carritoProductos = carritoProductos.concat(productoFiltrado)
                
                localStorage.setItem("Medicamento",JSON.stringify(carritoProductos))
                return carritoProductos
            })
        })
}
// function imprimir cards de productos
function cardCreator(array) {
    document.getElementById("container").innerHTML = ""
    if (array.length > 0) {
        array.forEach(card => {
            document.getElementById("container").innerHTML += `
            
            <div class="card">
            <div class="card-img">
            <img src="${card.imagen}" alt="${card.nombre}" />
            </div>
            <div class="card-info">
              <p class="text-title">${card.nombre}</p>
              <p class="text-body">${card.descripcion}</p>
            </div>
            <div class="card-footer">
            <span class="text-title">$${card.precio}</span>
            <span class="text-title">Stock: ${card.stock}</span>
            <button class="btn  rounded border-secondary addToCart bg-light" id="btn-${card.nombre}" onclick="cambiarColor('btn-${card.nombre}')" value="Comprar">Carrito
            </button>
            </div>
            </div>
            </div>
           

`})
    } else {
        document.getElementById("container").innerHTML =`
        <h2>No se puede encontrar productos con este nombre</h2>`
    }
    eventoComprar(".addToCart",array)
}
//cambiar color
function cambiarColor(id){
  let button= document.getElementById(id)
   console.log(button)
   if (productosStorage.includes(id)){
        button.classList.toggle("bg-success")
        button.classList.toggle("bg-light")
       
   } else{
       button.classList.toggle("bg-success")
        button.classList.toggle("bg-light")
        
   }
}


function range(array) {
    document.getElementById("container").innerHTML = ""
    let min = document.getElementById("minimo")
    console.log(min)
    let max = document.getElementById("maximo")
    console.log(max.value)
    let precioFiltrado = array.filter(e => (min.value <= e.precio && e.precio <= max.value))
    console.log(precioFiltrado)
    cardCreator(precioFiltrado)
    if(precioFiltrado.length== 0){
        document.getElementById("container").innerHTML = ""
        cardCreator(array)
        return array
    }
    return array
}




function filtroText(array, texto) {
    document.getElementById("container").innerHTML = ""
    console.log(inputText.value)
    let arrayFiltrado = array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase() || producto.descripcion.toLowerCase().includes(texto.toLowerCase()) || producto.precio == texto))
    cardCreator(arrayFiltrado)
    if(inputText.value.length== 0){
        document.getElementById("container").innerHTML = ""
        cardCreator(array)
        return array
    }
    return arrayFiltrado
}

function prodNotFound() {

    container.innerHTML = `
    <div class="card ">
    <p class="card-text"> <span class="fw-bold">"${inputText.value}"</span> No encontramos un producto que se ajuste a tu búsqueda.. </p> 
   
  </div>
    `

}
