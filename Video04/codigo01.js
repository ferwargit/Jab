let nombre = 'Jab';
const CANAL = "HTML6";
let fecha = new Date();
let numero = 3;
let euros = 100;

let mensaje = `Me llamo ${nombre}, mi canal es ${CANAL}, estamos en el año ${fecha.getFullYear()}, después del número ${numero} viene el número ${++numero} y el valor de ${euros} euros equivalen a ${convertir(euros)} pesos mexicanos.`;

function convertir(a){
  let resultado = a * 22.23;
  return resultado;
};


alert(mensaje);
console.log(mensaje);
console.log(fecha.getFullYear());