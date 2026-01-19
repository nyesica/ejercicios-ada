//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error.

//solicito que ingrese un numero
let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

if (numero === 1){
    console.log(`El número ingresado corresponde al día Lunes!`);
} else if (numero === 2){
    console.log(`El número ingresado corresponde al día Martes!`);
} else if (numero === 3){
    console.log(`El número ingresado corresponde al día Miercoles!`);
} else if (numero === 4){
    console.log(`El número ingresado corresponde al día Jueves!`);
} else if (numero === 5){
    console.log(`El número ingresado corresponde al día Viernes!`);
} else if (numero === 6){
    console.log(`El número ingresado corresponde al día Sábado!`);
} else if (numero === 7){
    console.log(`El número ingresado corresponde al día Domingo!`);
} else {
    console.log(`El número ${numero} no esta dentro del rango`)
}