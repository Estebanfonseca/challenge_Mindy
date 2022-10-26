let inputText = document.getElementById("text-search-js")
let checkboxes = document.getElementById("filtro")
let container = document.getElementById("container")
let inputsNumber = document.getElementById("botonRango")


async function mindyMedicamentos() {
    try {
        let datos = await fetch('https://apipetshop.herokuapp.com/api/articulos?tipo=Juguete')
        let products = await datos.json()
        let productos = products.response
        console.log(productos)
        let medicamentos = tipo(productos,"Medicamento")
        console.table(medicamentos)
        cardCreator(medicamentos)
        // filtradoCheck(juguetes)

        inputsNumber.addEventListener("click", () => { range(medicamentos) })

        inputText.addEventListener("keyup", () => {
             filtroText(range(medicamentos), inputText.value)

        })
        // filtrado(productos)
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

// function imprimir cards de productos
function cardCreator(array) {
    if (array.length > 0) {
        array.forEach(card => {
            document.getElementById("container").innerHTML += `
        
    <article class=" card rounded-4 p-0 pb-5 " style="width: 18rem;" id="card">
    
    <img src="${card.imagen}" alt="${card.nombre}" class="rounded-top"  />
        <div class="card-body pb-0 mb-0">
    <h5 class="card-title">${card.nombre}</h5>
    <p class="card-text">${card.descripcion}</p>
    <div class=" card-text d-flex justify-content-between gap-4 flex-wrap p-2">
                        <p class="fw-bold">Price $ ${card.precio}</p>
                        <p class="fw-bold">Stock  ${card.stock}</p>
                        <a href="${card._id}" class="btn" id="${card._id}">More info</a>
                </div>
        </div>
</article>


`})
    } else {
        document.getElementById("container").innerHTML =`
        <h2>No se puede encontrar productos con este nombre</h2>`
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