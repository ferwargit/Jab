// Para seleccionar la 1er caja
document.querySelector("#caja1");
document.querySelector("div");
document.querySelectorAll("#caja1")[0];
document.querySelectorAll("div")[0];

document.getElementById("caja1");
document.getElementsByTagName("div")[0];

// Para seleccionar la 2da caja
document.querySelector(".caja2");
document.querySelectorAll(".caja2")[0];
document.querySelectorAll("div")[1];

document.getElementsByClassName("caja2")[0];
document.getElementsByTagName("div")[1];

// Para seleccionar la 4ta caja
//                       Padre    Hijo
document.querySelector(".caja3 .caja4")[0];

// document.getElementsByClassName(".caja3")[0].document.getElementsByClassName(".caja4")[0];

// A cantidad le asigno un array con todos los div que tengan la clase caja5
// let cantidad = document.querySelectorAll(".caja5");
// Con getElementByClassName se actualiza la cantidad de elementos que hay en el array
let cantidad = document.getElementsByClassName("caja5");
alert(cantidad.length);
document.querySelector("body").innerHTML += '<div class="caja5">Caja 5</div>';
// Se crea pero nos se actualiza con querySelectorAll la cantidad sigue siendo 4
// Se actualiza con getElementByClassName
alert(cantidad.length);