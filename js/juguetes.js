let inputText= document.getElementById("text-search-js")
console.log(inputText)
let checkboxes= document.getElementById("filtro")
let container= document.getElementById("container")


async function mindyJuguetes(){
   try{ 
    let datos= await fetch("https://apipetshop.herokuapp.com/api/articulos?tipo=Juguete")
    let products = await datos.json()
    let productos= products.response
    
    let juguetes= tipo(productos,"Juguete")
    console.log(juguetes[0].nombre);
    
    cardCreator (juguetes)
    // filtradoCheck(juguetes)
    checkboxes.addEventListener("change",(e)=>{
        container.innerHTML = ""
        cardCreator(filtrado(juguetes))
    // let text= (filtroText(inputText.value,juguetes))

    //       if(text.length !==0){
    //             container.innerHTML=""
    //             cardCreator(text)
    //         } else {
        
    //             prodNotFound()
    //         }
            
   })



   inputText.addEventListener("keyup", () => {
   console.log(filtroText(inputText.value,juguetes))
    
    

    
})
    // filtrado(productos)
}
catch(error){
    console.log(error);
}

}
mindyJuguetes()
/// funcion que filtra por tipo de producto
function tipo(array,propiedad){

        let filtrado= array.filter(array=>array.tipo== [propiedad])
         return (filtrado)   
  
  }

// function imprimir cards de productos
function cardCreator (array){
    array.forEach(card=>{
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
}

/// función para filtrar checkbox y buscador (asignado a Laila)
function printFiltrado(){
 document.getElementById("filtro").innerHTML +=`
 
        <label class="form-check-label">
            Desde $300 Hasta $400
                <input class="form-check-input" type="checkbox" value="option1"> 
            </label>
            <label class="form-check-label"> 
            Desde $400 Hasta $500
                <input class="form-check-input" type="checkbox" value="option2">
            </label>
              <label class="form-check-label">
              Desde $500
                <input class="form-check-input" type="checkbox" value="option3">
            </label>
           
          
    `
}
printFiltrado()

function filtrado(array) {
    
    //filtrado de precios
    let productoOption1= (array.filter(e=> e.precio >= 300 && e.precio <= 400))
    let productoOption2= (array.filter(e=> e.precio >= 401 && e.precio <= 500))
    let productoOption3= (array.filter(e=> e.precio >= 501))
    //filtrado de checks
    let checked = [...document.querySelectorAll('input[type="checkbox"]')].filter( check => check.checked)
    let checkSelected= checked.map(checked => checked.value)
    if (checkSelected =="option1"){
        console.log(productoOption1);

        return productoOption1
    } else if (checkSelected=="option2"){
        console.log(productoOption2);
        return productoOption2
    } else if (checkSelected=="option3"){
        console.log(productoOption3);
        return productoOption3
    } else if(checkSelected.length===0){
        return array
    }  

       
}

function filtroText(array){
    
    let arrayFiltrado = array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()|| producto.descripcion.toLowerCase().includes(texto.toLowerCase()|| producto.precio == texto)))
   
    return arrayFiltrado
}
// function textoSearch(texto, array) {
        
    
//     let arrayFiltrado = array.filter(array => array.nombre.toLowerCase().includes(texto.toLowerCase()|| array.descripcion.toLowerCase().includes(texto.toLowerCase()|| array.precio == texto)))
   
//     return arrayFiltrado
    
   

// }

function prodNotFound(){
    
    container.innerHTML = `
    <div class="card ">
    <p class="card-text"> <span class="fw-bold">"${inputText.value}"</span> No encontramos un producto que se ajuste a tu búsqueda.. </p> 
   
  </div>
    `
     
}
///// hasta acá va Laila
//Nico tarea: cambiar el color de productos con 3 unidades para venderlos más rápido (cambiar background de la card)
// ordenar las cards para que estén primero