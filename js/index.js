
let productosStorage = localStorage.getItem("producto")
productosStorage = JSON.parse(productosStorage)




async function mindyJuguetes() {
    try {
        let datos = await fetch("https://apipetshop.herokuapp.com/api/articulos?tipo=Juguete")
        let products = await datos.json()
        let productos = products.response
        
        
    
    }
    catch (error) {
        console.log(error);
    }

}

function nroCarrito(array){
    if (array.length!==0){
        printCarrito(array)
    }
}

function printCarrito(array){
    let nroCarrito= document.getElementById("nro-carrito-js")
    nroCarrito.innerHTML=
     ` ${array.length}
     `    

}
nroCarrito(productosStorage)