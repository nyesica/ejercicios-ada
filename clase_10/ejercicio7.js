//Intercambia el contenido de 2 variables

let a = 10;
let b = 20;

console.log(`Antes del intercambio a = ${a} y b = ${b}`);

let temporal = a;
a = b;
b = temporal;

console.log(`Despues del intercambio a = ${a} y b = ${b}`);