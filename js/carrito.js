let productoSeleccionado = localStorage.getItem("Juguetes")
productoSeleccionado = JSON.parse(productoSeleccionado)
productoSeleccionado.forEach(e=>
 e.cantidad = 0 )

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
    <td class="text-light">${e.cantidad}</td>
  </tr>
        `
    })

}





/*   for(let i =0 ; i<array.length;i++)
  if(array[i].name===array[i+1].name){
  array.__v += 1
  array.stock -= 1 */
 /*  let cantidad = array.reduce((element1,element2) => {
    return {
        nombre: element2.nombre,
        stock:(element2.stock)-1,
        precio:element1.precio + element2.precio,
        tipo: element1.tipo +element2.tipo,
        cantidad: 0 + 1,
    }
})
return cantidad */
/* return array
}else{
 let arr
  return arr=[ {
    nombre: array.nombre,
    stock:(array.stock)-1,
    precio:array.precio,
    tipo: array.tipo,
    cantidad: array.__v + 1,
}]}
} */
/* let arrai = [acumulador(productoSeleccionado)]
console.log(arrai) */
  imprimirTabla(productoSeleccionado,contenedorTabla)



   function comparador (array){
    let a 
    let f
    a=array.filter(e=>e._id===e._id)
    a =[...new Set (a) ]
    console.log(a)
    f= a.map(b=>({nombre:b.nombre, stock: b.stock-1 ,precio: b.precio,tipo:b.tipo,cantidad :b.cantidad +1,}))
    return f
  }
 console.log(comparador(productoSeleccionado))