let productoSeleccionado = localStorage.getItem("Medicamento")
productoSeleccionado = JSON.parse(productoSeleccionado)

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
  imprimirTabla(reduceStats(productoSeleccionado),contenedorTabla) 

function reduceStats (array){
    let filtroName = []
    let vacio = []
    array.forEach(e => {
      return filtroName = filtroName.concat(e.nombre)
    })
    let filtroNameSet = new Set(filtroName)
    filtroNameSet = Array.from(filtroNameSet)
    console.log(filtroNameSet);
    filtroNameSet.forEach(elemento => {
      
      let arrayFiltradoNombre = array.filter(e => elemento === e.nombre)
      console.log(arrayFiltradoNombre);
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
  console.log(reduceStats(productoSeleccionado))


  /* function comparador (array){
    let objeto = {};
    let a ;
    a = array.filter(function(e) {
    let existe = !objeto[e._id];
    objeto[e._id] = true;
    return existe;
    });
    console.log(a)
    let f
    f= a.map(b=>({nombre:b.nombre, stock: b.stock-1 ,precio: b.precio,tipo:b.tipo,cantidad :b.cantidad +1,}))
    return f
  }
 console.log(comparador(productoSeleccionado))

 imprimirTabla(comparador(productoSeleccionado),contenedorTabla) */