//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

//Solicito al usuario que ingrese un numero cualquiera.
let numero = parseFloat(prompt("Ingrese un número:"));

if (numero > 0){
    console.log(`El número ${numero} es positivo!`);
} else if (numero < 0) {
    console.log(`El número ${numero} es negativo`);
} else {
    console.log("El número es cero");
}