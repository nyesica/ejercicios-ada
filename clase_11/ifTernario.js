//Verificar si una persona es mayor de edad 

//1. Importacion de la libreria
const prompt = require("prompt-sync")(); 
//2. Entrada de datos
let edad = parseInt(prompt("Por favor ingrese su edad: ")); 
//3. Logica con el If Ternario 
let mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'; 
console.log(mensaje);