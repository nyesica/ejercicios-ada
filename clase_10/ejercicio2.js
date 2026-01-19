//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

// Declara 2 variables: nombre y edad (Ejercicio 1)

let edad = parseInt(prompt("¿Que edad tiene?"));
let peso = parseFloat(prompt("¿Que peso tiene?"));

//Ejercicio 2: Usando las variables: Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

let nombre = prompt("¿Cuál es su nombre?");

console.log(`Hola ${nombre}, usted tiene ${edad} años y pesa ${peso} kilogramos.`);
