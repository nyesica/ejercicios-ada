//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

//Me parece buena idea informarle que va a tener que ingresar 3 números
console.log(`Hola! A continuación le voy a solicitar que ingrese 3 números:`);

//Solicito al usuario que ingrese los números
let numero1 = parseFloat(prompt("Ingrese el primero:"));
let numero2 = parseFloat(prompt("Ingrese el segundo:"));
let numero3 = parseFloat(prompt("Ingrese el tercero:"));

if (numero1 > numero2 && numero1 > numero3){
    console.log(`El número ${numero1} es el mayor`);
} else if (numero2 > numero1 && numero2 > numero3){
    console.log(`El número ${numero2} es el mayor`);

} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El número ${numero3} es el mayor`);
}
