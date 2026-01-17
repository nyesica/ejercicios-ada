const prompt = require('prompt-sync')();

// Suma de números

//Escribe un programa que pida al usuario que ingrese 2 números, que los sume y muestre el resultado de la suma.

//Pide al usuario que ingrese el numero 1
let numero1 = parseFloat(prompt('Ingrese el primer número:'));

//Pide que ingrese el segundo número
let numero2 = parseFloat(prompt('Ingrese el segundo número:'));

//Suma
let resultado = numero1 + numero2;

//Muestra resultado
console.log(`El resultado es ${resultado}`);