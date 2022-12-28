// a = Cantidad de dinero que quiero cambiar
// b = Tipo de cambio

function convertir(a, b) {
  var resultado = a * b;
  return resultado;
}

var dinero = 10;
var cambio = 125;

function iniciar_conversion() {
  cambio = document.getElementById("cambio").value;
  dinero = document.getElementById("dinero").value;
  dinero = (dinero > 0) ? dinero : 1;
  recibo = convertir(dinero, cambio);
  document.getElementById("conversiones").innerHTML += `${dinero} son ${recibo} yenes <br>`;
  document.getElementById("dinero").value = "";
  document.getElementById("dinero").focus();
}

document.getElementById("boton").onclick = iniciar_conversion;
document.getElementById("cambio").value = cambio;
document.getElementById("dinero").onkeydown = teclado;


function teclado(e) {
  let codigo_tecla = e.keyCode;
  // alert(codigo_tecla);
  if(codigo_tecla == 13) {
    iniciar_conversion();
  }
}