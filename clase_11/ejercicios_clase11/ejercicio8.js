const prompt = require('prompt-sync')();

//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

let numero = parseInt(prompt("Ingrese un número entero positivo:"));

for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}

