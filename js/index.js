
let productosStorage = localStorage.getItem("Juguetes")
productosStorage = JSON.parse(productosStorage) || []
let productosMedicamento = localStorage.getItem("Medicamento")
productosMedicamento= JSON.parse(productosMedicamento) || []
let cantidad = [...productosStorage].concat([...productosMedicamento])




function nroCarrito(array){
    if (array.length!==0){
        let length = array.length
        let nroCarrito= document.getElementById("nro-carrito-js")
        nroCarrito.innerHTML=
     `  ${length}
     ` 
         
    }
    
}


nroCarrito(cantidad)