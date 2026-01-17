//Determinar si un número es par o impar

//Escribir un programa que solicite al usuario que ingrese un número entero, determine si es par o impar y muestre un mensaje indicandolo.

const prompt = require('prompt-sync')();

//Solicitamos el número al usuario
let numero = parseFloat(prompt('Ingrese un númeo entero:'));

//Verificamos si es es par o impar
if (numero % 2 === 0){
    console.log('El número es par');
} else {
    console.log('El número es impar');
}
