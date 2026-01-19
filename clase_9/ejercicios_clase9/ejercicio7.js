//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462

//Solicito ue ingrese su peso
let peso = parseFloat(prompt("Por favor ingrese su peso en kilogramos:"));

let pesoLibras = peso * 2.20462
console.log(`Su peso en libras es ${pesoLibras}`);