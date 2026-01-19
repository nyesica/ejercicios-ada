//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Tipo de Datos: Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre.

let verdadero = true;
let texto = "Bienvenido!";
let numero = 35;
let nada = null;

let operacionMatematica = numero + 5;
console.log(operacionMatematica);

let bienvenida = `Hola,  ${texto}`;
console.log(bienvenida);

if (verdadero){
    console.log(`${verdadero} es true`);

} else {
    console.log("Es falso")
}

if (nada === null){
    console.log("Nada es null");

} else {
    console.log("nada no es null")
}