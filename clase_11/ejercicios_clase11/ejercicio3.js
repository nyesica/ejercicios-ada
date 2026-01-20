//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

let numero = parseInt(prompt("Ingrese un número por favor:"));

for (let i = 1; i <= numero; i++ ) {
    console.log(`Contando: ${i}`)
}