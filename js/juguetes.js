let input= document.getElementById("text-search-js")
let checkboxes= document.getElementById("filtro")
let container= document.getElementById("container")
console.log(input)

async function mindyJuguetes(){
   try{ 
    let datos= await fetch("https://apipetshop.herokuapp.com/api/articulos?tipo=Juguete")
    let products = await datos.json()
    let productos= products.response
    
    let juguetes= tipo(productos,"Juguete")
   
    
    cardCreator (juguetes)
    // filtradoCheck(juguetes)
    checkboxes.addEventListener("change",(e)=>{
     let filtradoCheck=   filtrado(juguetes)
        if(filtradoCheck.length !==0){
            container.innerHTML=""
        }
        cardCreator(filtradoCheck)
   })

   input.addEventListener("keyup",(e)=>{
    console.log(e.target)
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
    
    
    let productoOption1= (array.filter(e=> e.precio >= 300 && e.precio <= 400))
    let productoOption2= (array.filter(e=> e.precio >= 401 && e.precio <= 500))
    let productoOption3= (array.filter(e=> e.precio >= 501))
    
    let checked = [...document.querySelectorAll('input[type="checkbox"]')].filter( check => check.checked)
    let checkSelected= checked.map(checked => checked.value)
    if (checkSelected =="option1"){
        cardCreator (productoOption1)
    } else if (checkSelected=="option2"){
    
        cardCreator (productoOption2)
    } else if (checkSelected=="option3"){
      
        cardCreator (productoOption3)
    } else if(checkSelected.length===0){
        cardCreator (array)
    }

    let arrayFiltrado = checkSelected.filter(producto => producto.name.toLowerCase().includes(texto.toLowerCase())|| producto.price == texto)
    container.innerHTML= ""
    cardCreator(arrayFiltrado)
       
}



//data.filter(function(x){ return x.Price >= 250 && x.Price <= 800});

///// hasta acá va Laila
//Nico tarea: cambiar el color de productos con 3 unidades para venderlos más rápido (cambiar background de la card)
// ordenar las cards para que estén primero