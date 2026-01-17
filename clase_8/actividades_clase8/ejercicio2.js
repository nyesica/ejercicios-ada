const prompt = require('prompt-sync')();

//Verifica si un número es positivo, negativo o cero

//Usamos condicionales
//Escribe un programa que le pida al usuario ue ingrese un número, que verifiue si ese número es positivo, negativo o igual a cero. Y que muestre un mensaje indicandolo.

//Le pedimos al usuario que ingrese un número
let numero = parseFloat(prompt('Ingrese un número:'));

//Verificamos con condicionales
if(numero > 0){
    console.log("El número es positivo");
} else if (numero < 0){
    console.log("El número es negativo");
} else {
    console.log("El número es igual a cero");
}