let usuario = [];
//carrito numeros de productos

let productosStorage = localStorage.getItem("Juguetes")
productosStorage = JSON.parse(productosStorage) || []
let productosMedicamento = localStorage.getItem("Medicamento")
productosMedicamento = JSON.parse(productosMedicamento) ||[]
let cantidad = [...productosStorage].concat([...productosMedicamento])

// ----------------------------Funciones---------------------------------------------------
function contenedorId(id) {
  let contenedor = document.getElementById(id);
  return contenedor;
}
// ---------------------------------------Llamado de funciones y Eventos ---------------------------------------------
contenedorId("enviar-js").addEventListener("click", () => {
  let checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((ele) => ele.value);

  if (checked.length > 1 ) {
    return alert("elija un solo tipo de mascota")
  }else if (checked.length == 0) {
    return alert("elija un tipo de mascota")
  }
  let dato = {
    nombre_completo: contenedorId("nombreYapellidoInput").value,
    email: contenedorId("e-mail").value,
    telefono: contenedorId("telefono").value,
    nombre_mascota: contenedorId("nombreDeLaMascotaInput").value,
    mascotas: checked[0],
    comentario: contenedorId("Comentarios").value,
  };
  usuario = usuario.concat(dato);
  alert("tus datos fueron enviados");
  localStorage.setItem("usuario", JSON.stringify(usuario));
});



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