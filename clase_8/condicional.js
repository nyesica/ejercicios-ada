//Consigna

//Crea un programa que simule un sistema de calificación basado en la nota de un estudiante(un valor numerico del 0 al 100). El programa debe determinar  si el estudiante a reprobado, aprobado o a obtenido una calificación excelente, según las siguientes condiciones:

//Si la nota es menor a 60, el estudiante a reprobado.
//Si la nota esta entre 60 y 89 inclusive, el estudiante a aprobado.
//Si la nota es mayor a 90, obtuvo una calificación excelente.
//Usar condicional if, else is, else.

let nota = 75;

if (nota < 60){
    console.log("Reprobado");
} else if(nota >= 60 && nota <=89) {
    console.log("Aprobado");
} else {
    console.log("Excelente!");
}