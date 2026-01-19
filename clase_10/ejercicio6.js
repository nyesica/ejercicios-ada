//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Comparaciones y Operadores Lógicos
//Declara dos variables y asígnales valores numéricos de tu elección.
//Utiliza los operadores > (mayor que) y && (y lógico) para verifi car si ambos números son mayores que 10.
//Utiliza console.log() para mostrar el resultado de la comparación

let numero1 = 12;
let numero2 = 22;

if (numero1 > 10 && numero2 > 10){
    console.log(`El número ${numero1} y el número ${numero2} son mayores que 10`);

} else {
    console.log("Alguno es menor que 10")
}
