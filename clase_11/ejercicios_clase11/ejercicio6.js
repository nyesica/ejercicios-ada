//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

let numero = parseInt(prompt("Ingrese un número:"));

for (i = 1; i <= 10; i++) {
    console.log(numero*i);
}