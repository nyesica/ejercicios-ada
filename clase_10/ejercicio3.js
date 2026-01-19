//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Validación de edad

const edad_minima = 18;
const edad_maxima = 99;

let edad = parseInt(prompt("Por favor ingrese su edad:"));

if (edad >= edad_minima && edad <= edad_maxima){
    console.log(`Bienvenido a la encuesta`);
} else {
    console.log(`Su edad no esta dentro del rango permitido para participar de esta encuesta`);
}