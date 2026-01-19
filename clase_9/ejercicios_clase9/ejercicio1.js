//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

//Pedimos al usuario que ingrese los números
let numero1 = parseInt(prompt("Ingrese un número:"));
let numero2 = parseInt(prompt("Ingrese otro número:"));

//Verificamos con condicionales
if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que el ${numero2} `);
} else if (numero1 === numero2) {
    console.log(`Los números ${numero1} y ${numero2} son iguales`);
} else {
    console.log(`El número ${numero2} es mayor que el número ${numero1}`);
}