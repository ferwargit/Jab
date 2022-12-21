// Variable global la puedo usar en cualquier parte del código
// y tambien dentro de las funciones
var edad = 17;
sumar();

function sumar(){
  alert(edad); // 17
  edad = 19;
}

alert(edad); // 19


// NOMBRE DE UNA VARIABLE
// No puede empezar con un número
// No puede contener espacios
// No puede contener caracteres especiales
// No puede contener palabras reservadas
// No puede contener caracteres acentuados
// Diferencia entre mayúsculas y minúsculas
// El nombre tiene que empezar con una letra, guión bajo '_' o signo de dólar ($)

// NOMBRE CORRECTOS
var $nomBRE;
var _nombre;
var fr_76738;

// LENGUAJE DEBILMENTE TIPADO
// No necesito definir el tipo de dato
// No necesito declarar la variable antes de usarla

// TIPOS DE DATOS
// String
  // let nombre = "Juan";
  // Con comillas dobles o simples
  // Valor numerico + Valor de texto = Concatenación (Valor de texto)
  // \n = Salto de línea
  // \t = Tabulador
  // \b = Retroceso
  // \r = Retorno de carro
  // \f = Salto de página
  // \v = Tabulador vertical
  // \' = Comilla simple
  // \" = Comilla doble
  // \\ = Barra invertida
  // \xnn = Caracteres hexadecimales
  // \unnnn = Caracteres unicode
  // \nnnn = Caracteres octales
  // \0nnn = Caracteres octales
  // \nn = Caracteres octales
  // \n = Caracteres octales
// Number
  // let x = 22.5;
  // No distingue entre Integer y Float
  // Float con punto decimal (22.5)
// Boolean
  // let x = true;
  // x = 1;
  // let x = false;
  // x = 0;
  // Valor sin comillas
// Array
  // let x = [1, false, 3, 4, cinco];
  // Los valores pueden ser muméricos, texto, booleanos, etc. y van separados por comas
// Objetos
  // let x = {nombre: "Juan", edad: 17};
  // Los valores pueden ser muméricos, texto, booleanos, etc. y van separados por comas
  // Los valores se definen con el nombre de la propiedad y dos puntos
  // Los valores se separan con comas
// Function