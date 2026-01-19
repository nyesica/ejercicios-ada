//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.

//Pido los valores al usuario, y comparamos el resultado con true, si escribe true da true y si escribe false da false.
let condicion1 = prompt("Ingrese el primer valor booleano:") === 'true';
let condicion2 = prompt("Ingrese el segundo valor booleano:") ==='true';

//Resultado de combinaciones lógicas en console.log
console.log(`AND (&&): ${condicion1 && condicion2}`);
console.log(`OR (||): ${condicion1 || condicion2}`);
console.log(`NOT condicion1 (!): ${!condicion1}`);



