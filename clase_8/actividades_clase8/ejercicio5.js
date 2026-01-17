// Saludo personalizado

//Escribe un programa que solicite al usuario que ingrese su nombre y muestre un saludo personalizado usando el nombre que se ingreso.

const prompt = require('prompt-sync')();

//Pedimos al usuario que ingrese su nombre
let nombre = prompt('Ingrese su nombre:');

//Muestro el msj personalizado
console.log(`Hola ${nombre}, ¿En que te puedo ayudar?`);