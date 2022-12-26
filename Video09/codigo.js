// Todo esto se ejecuta cuando se carga la pagina

function saludar(n, m){
  // alert("Hola: " + n);
  alert(`Hola ${n} tienes ${m} años`);
}

saludar("Fernando", 4);
saludar("Javier", 23);
saludar("Ervigio", 12);

function saludar2(n, m){
  let r = `Hola ${n} tienes ${m} años`;
  return r;
}

let resultado = saludar2("Pinocho", 49);
alert(resultado);

function saludar3(n, m){
  return `Hola ${n} tienes ${m} años`;
}

let resultado2 = saludar3("Papua", 78);
alert(resultado2);