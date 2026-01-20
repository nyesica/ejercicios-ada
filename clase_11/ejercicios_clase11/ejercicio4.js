//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.


//Solicitamos el número al usuario
let numero = parseInt(prompt('Ingrese un númeo entero:'));

//Verificamos si es es par o impar
let esPar = numero % 2 === 0 ? "El número ingresado es par" : "El número ingresado es impar";
console.log(esPar);
