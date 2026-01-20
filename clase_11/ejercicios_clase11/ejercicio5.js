//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos

//Pedimos el rango inicio-fin
let inicio = parseInt(prompt("Infrese el número de inicio:"));
let final = parseInt(prompt("Ingrese el número del fin:"));

if (inicio > final) {
    console.log("Error: El número del inicio debe ser menor que el final") //no podemos contar de un numero mayor a uno menor
} else {
    console.log(`Numeros pares entre ${inicio} y ${final}`);
 for (let i = inicio; i<= final; i++){
    if (i % 2 === 0){ 
 console.log(i);
 }
 }
 }
