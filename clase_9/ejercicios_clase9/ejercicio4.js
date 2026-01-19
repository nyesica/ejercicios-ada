//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre

//Solicito que ingrese su nombre
let nombre = prompt("Ingrese su nombre:");

//Verifico si es igual al mio o no. Le doy una salida en console.log para cada caso.
if (nombre === "yesica"){
    console.log(`Te llamas como yo! Hola, tocay@!`);
} else {
    console.log(`Hola ${nombre}, mucho gusto!`)
}