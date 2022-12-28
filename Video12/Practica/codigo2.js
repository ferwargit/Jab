
function convertir(a, b) {
  let resultado = a * b;
  return resultado;
}

var dinero = 100;
var cambio = 350;

function iniciar_conversion() {
  cambio = document.getElementById("input_cambio").value;
  dinero = document.getElementById("dinero").value;
  dinero = (dinero > 0) ? dinero : dinero = 1;
  recibo = convertir(dinero, cambio);
  console.log(recibo);
  document.getElementById("conversiones").innerHTML += `${dinero} dólares son ${recibo} pesos argentinos <br>`;
  document.getElementById("dinero").value = "";
  document.getElementById("dinero").focus();
}

function teclado(e) {
  let codigo_tecla = e.keyCode;
  console.log(codigo_tecla);
  if (codigo_tecla == 13) {
    iniciar_conversion();
  }
}

document.getElementById("boton").onclick = iniciar_conversion;
document.getElementById("input_cambio").value = cambio;
document.getElementById("dinero").onkeydown = teclado;

