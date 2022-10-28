let deleteAllProducts = document.getElementById("deleteAllProducts")  
let juguetesSeleccionado = localStorage.getItem("Juguetes")
juguetesSeleccionado = JSON.parse(juguetesSeleccionado) || []
let medicamentoSeleccionado = localStorage.getItem("Medicamento")
medicamentoSeleccionado = JSON.parse(medicamentoSeleccionado) ||[]
let productoSeleccionado = []
productoSeleccionado = concatProductos(medicamentoSeleccionado,productoSeleccionado)
productoSeleccionado = concatProductos(juguetesSeleccionado,productoSeleccionado)
let contenedorTabla = document.getElementById("tbody")
let contenedorTablaF = document.getElementById("tfoot")
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
  imprimirTabla(reduceStats(productoSeleccionado),contenedorTabla) 
function concatProductos(array,arrayConcatenar) {
  arrayConcatenar
  array.forEach(e => {
    arrayConcatenar = arrayConcatenar.concat(e)
  })
  return arrayConcatenar
}
function reduceStats (array){
    let filtroName = []
    let vacio = []
    array.forEach(e => {
      return filtroName = filtroName.concat(e.nombre)
    })
    let filtroNameSet = new Set(filtroName)
    filtroNameSet = Array.from(filtroNameSet)
    filtroNameSet.forEach(elemento => {
      
      let arrayFiltradoNombre = array.filter(e => elemento === e.nombre)

      let StateZero = {
        nombre: "",
        tipo: "",
        stock: 0,
        precio: 0,
        cantidad: Number(0) ,
        }
    let stats = arrayFiltradoNombre.reduce((element1,element2) => { 
      return {
            nombre: element2.nombre,
            tipo: element2.tipo,
            stock: element2.stock,
            precio: element1.precio + element2.precio,
            cantidad: Number(Number(element1.cantidad)+ 1),
        }
    }, StateZero)
      vacio = vacio.concat(stats)
    })
    
    
    
    
    
    return vacio
  }

deleteAllProducts.addEventListener('click',() =>{
    localStorage.removeItem('Juguetes')
    localStorage.removeItem('Medicamento')
    contenedorTabla.innerHTML = ''
    contenedorTablaF.innerHTML = `
    <tr>
<td class="text-light">Total</td>
<td></td>
<td></td>
<td class="text-light">  </td>
<td></td>
<td class="text-light">  </td>
</tr>
   `
  })


  function total (array){
    let lleno = []
      let StateUno = {
        precio: 0,
        cantidad: 0 ,
        }
        console.log(array.cantidad)
    let stats = array.reduce((element1,element2) => { 
      return {
            precio: element1.precio + element2.precio,
            cantidad: Number(element1.cantidad)+ Number(element2.cantidad),
        }
    }, StateUno)
      lleno = lleno.concat(stats)
    
    return lleno
  }
  console.log(total(reduceStats(productoSeleccionado)))

  function imprimirTablaF (array,contenedor){
    array.forEach(e=>{
       contenedor.innerHTML +=`
        <tr>
   <td class="text-light">Total</td>
   <td class="table-active"></td>
   <td class="table-active"></td>
   <td class="text-light">.-$ ${e.precio}</td>
   <td class="table-active"></td>
   <td class="text-light">${e.cantidad}</td>
 </tr>
       `
   })
  }
imprimirTablaF(total(reduceStats(productoSeleccionado)),contenedorTablaF)