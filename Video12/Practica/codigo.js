// Funcion recibe 2 parametros
// a: Cantidad de dinero que quiero cambiar
// b: El cambio de dicha moneda

function convertir(a, b) {
  let resultado = a * b
  return resultado  
}

var dinero = 10;
var cambio = 350;

// Inicia cuando hacemos click en el boton
function iniciar_conversion() {
  recibo = convertir(dinero, cambio);
  console.log(recibo);
  // Esribo en el html el resultado de la conversion
  document.getElementById("conversiones").innerHTML += recibo + `<br>`; 
}

// Ejecuto la funcion al hacer click en el boton
document.getElementById("boton").onclick = iniciar_conversion;