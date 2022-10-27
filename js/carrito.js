let productoSeleccionado = localStorage.getItem("producto")
productoSeleccionado = JSON.parse(productoSeleccionado)
console.log(productoSeleccionado)

let contenedorTabla = document.getElementById("tbody")



function imprimirTabla (array,contenedor){
     array.forEach(e=>{
        contenedor.innerHTML +=`
         <tr>
    <td>           </td>
    <td class="text-light">${e.nombre}</td>
    <td class="text-light">${e.stock}</td>
    <td class="text-light">.-$ ${e.precio}</td>
    <td class="text-light">${e.tipo}</td>
    <td class="text-light">1</td>
  </tr>
        `
    })

}
imprimirTabla(productoSeleccionado,contenedorTabla)
let arreglo = []
function acumulador (array){
  let cantidad = array.reduce((element1,element2) => {
    return {
        nombre: element1.nombre
        cantidad1: element1.cantidad1 + element2.cantidad1,
    }
},arreglo)
}
acumulador(productoSeleccionado)
console.log(acumulador(productoSeleccionado))