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
