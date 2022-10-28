
let productosStorage = localStorage.getItem("Juguetes")
productosStorage = JSON.parse(productosStorage)
console.log(productosStorage);
let productosMedicamento = localStorage.getItem("Medicamento")
productosMedicamento = JSON.parse(productosMedicamento)
console.log(productosMedicamento);
let cantidad = [...productosStorage].concat([...productosMedicamento])
console.log(cantidad);



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
printCarrito(nroCarrito(cantidad))