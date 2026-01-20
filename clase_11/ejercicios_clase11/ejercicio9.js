const prompt = require('prompt-sync')();

//Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al fi nal. Usa un ciclo for para realizar la cuenta regresiva.

console.log("Comienza la cuenta regresiva:");

for (let i = 10; i >= 1; i--){
    console.log(i);
}
console.log("Despegue!");