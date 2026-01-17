//Calculadora de descuento

//Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pida al usuario que ingrese el precio original del producto y el porcentaje de descuento, y muestra el precio final.

const prompt = require('prompt-sync')();

// Pedimos al usuario el precio original del producto
let precioOriginal = parseFloat(prompt('Ingresa el precio original del producto:'));

//Pedir al usuario el porcentaje de descuento
let porcentajeDeDescuento = parseFloat(prompt('Ingresa el porcentaje de descuento:'));

//Calcular el descuento
let descuento = (precioOriginal * porcentajeDeDescuento) / 100;

//Calculamos el precio final
let precioFinal = (precioOriginal - descuento);

//Mostrar el precio final
console.log('El precio final después del descuento es :', precioFinal);
