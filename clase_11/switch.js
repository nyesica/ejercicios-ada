//Determinar que dia de la semana es segun un numero 

//Importacion de la libreria 
const prompt = require("prompt-sync")(); 

//Entrada de datos 
let numeroDia = parseInt(prompt("Por favor ingrese un nro del 1 al 7: ")); 

//Estructura Switch

switch(numeroDia){
    //Si numeroDia es igual a 1... 
    case 1:
        console.log("Es lunes a trabajar!");
        break; 
    case 2: 
        console.log("Es martes, recien arrancamos");
        break; 
    case 3: 
        console.log("Es miercoles, estamos a mitad de semana");
        break; 
    case 4: 
        console.log("Es jueves, falta menos para el finde");
        break; 
    case 5: 
        console.log("Es viernes, ultimo dia de la semana!");
        break; 
    case 6: 
        console.log("Es sabado, llegamos al finde!");
        break; 
    case 7: 
        console.log("Es domingo, se termino la semana!");
        break; 
    //El default, funciona como el else final (si el nro no fue del 1 al 7...)
    default: 
       console.log("El nro ingresado no se encuentra dentro del parametro");
       
}