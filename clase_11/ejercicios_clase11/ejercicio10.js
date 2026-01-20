const prompt = require('prompt-sync')();

//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

let numero = Math.floor(Math.random()*10)+ 1; 

console.log("Adivina un número entre 1 y 10! Tienes 3 intentos!!");

