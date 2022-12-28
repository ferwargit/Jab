// Escribo una funcion convertir
// a: Dinero que quiero cambiar
// b: Valor del cambio

function convertir(a, b) {
  let resultado = a * b;
  return resultado;
}

// var dinero = 10;
var cambio = 350;

function iniciar_conversion() {
  dinero = document.getElementById("dinero").value;
  recibo = convertir(dinero, cambio);
  console.log(recibo);
  document.getElementById("conversiones").innerHTML += recibo + `<br>`;
}

document.getElementById("boton").onclick = iniciar_conversion;