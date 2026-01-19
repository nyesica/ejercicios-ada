//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.

//Pido al usuario su edad
let edad = parseInt(prompt("Ingrese su edad por favor:"));

//Verificamos con condicionales y devolvemos un msj en cada caso
if (edad < 18) {
    console.log("Usted es menor de edad")
} else {
    console.log("Usted es mayor de edad!")
}

