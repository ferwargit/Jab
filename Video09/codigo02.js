// Ahora lo que nos interesa es que se ejecute la funcion
// cuando hacemos click en un boton, en un evento que ejecuta el usuario
// para ello construimos el boton en el html y lo asociamos a la funcion

function saludar(n, m) {
  return `Hola ${n} tienes ${m} años`;
}

function iniciar() {
  let resultado = saludar("Fernando", 4);
  alert(resultado);
}

// Hasta el punto tenemos el elemento boton en el html
// document.getElementById("boton").
// Lo que nos falta es asociar el evento click al boton
// para ello usamos el metodo onclick y le pasamos la funcion
document.getElementById("boton1").onclick = iniciar;
document.getElementById("boton2").onclick = ir_a_una_web;

function ir_a_una_web() {
  // window.location = "https://www.google.com";
  location.href = "https://www.google.com";
}