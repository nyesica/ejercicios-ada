//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

//Defino las constantes 
const rango_minimo = 40
const rango_maximo = 100

//Solicito al usuario que ingrese un múmero
let numero = parseInt(prompt("Ingrese un número por favor:"));

//Verificamos
if ( numero >=rango_minimo && numero <=rango_maximo) {
    console.log(`El número ${numero} esta dentro del rango definido`);
} else {
    console.log(`El número ${numero} NO está dentro del rango definido`)
}