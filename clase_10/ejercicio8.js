//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Solicito que ingrese los datos
let gradosCelsius = parseFloat(prompt("Ingrese la temperatura en grados celsius:"));

let fahrenheit = (gradosCelsius * 9 / 5) + 32;

console.log(`Su temperatura es:  ${fahrenheit} en grados Fahrenheit`);