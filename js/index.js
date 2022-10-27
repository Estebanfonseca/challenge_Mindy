
let cantidad=[]

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

function cantidad(array, contenedor){
    if (array.length==0){

    }
}

function printCarrito(){
    let nroCarrito= document.getElementById("nro-carrito-js")
    nroCarrito.innerHTML=
     ` 2 ${cantidad.length}}
    `    

}
printCarrito()