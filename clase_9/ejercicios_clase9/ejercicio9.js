//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

//Definimos PI
const PI = 3.14159;

// Solicito que ingrese el dato 
let radio = parseFloat(prompt("Ingrese el radio de un círculo:"));

// Entiendo que en programacion para calcular el area debemos multiplicar el número por si mismo
let area = PI * radio * radio;

//Para el perimetro hacemos el siguiente calculo
let perimetro = 2 * PI * radio;

console.log(`El area es ${area}`);
console.log(`El perimetro es ${perimetro}`);