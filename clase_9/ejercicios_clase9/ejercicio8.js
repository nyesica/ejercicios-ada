//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

//Informamos que vamos a pedir las longitudes de los lados de un triangulo
console.log("Ingrese las longitudes de los 3 lados de un triangulo para determinar el tipo")

//Pido al usuario que ingrese los datos
let lado1 = parseFloat(prompt("Lado A:"));
let lado2 = parseFloat(prompt("Lado B:"));
let lado3 = parseFloat(prompt("Lado C:"));

//Por sus lados los triangulos se clasifican en 3: Equilatero, isosceles y escaleno

//Equilatero tiene todos los lados iguales
if (lado1 === lado2 && lado2 === lado3) {
    console.log (`Es un triángulo Equilatero`);
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ) {
    console.log("Es un triángulo Iscosceles"); //tiene 2 lados iguales
} else {
    console.log("Es un triángulo Escaleno"); //sus 3 lados son diferentes
}