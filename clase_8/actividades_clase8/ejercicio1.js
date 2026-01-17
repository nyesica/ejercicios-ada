const prompt = require('prompt-sync')();

//Ejercicio 1
//Calcula el doble de un número
//Escribir un programa que solicite al usuario que ingrese un número cualquiera, calcule el doble de ese número y muestre el resultado en la consola.

//Pedimos al usuario que ingrese un número
let numero = parseFloat(prompt('Ingrese un número:'));

//calculamos el doble del número
let resultado = (numero * 2);

//Mostamos el numero en la consola
console.log('El doble del número es', resultado);