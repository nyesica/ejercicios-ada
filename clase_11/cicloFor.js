//Ejemplo programa que simula un loro, repite lo que escribe el usuario 5 veces. 

//Importamos la libreria
const prompt = require("prompt-sync")(); 

//Entrada de datos
let mensaje = prompt("Por favor ingrese la frase que le gustaria que el loro repita: "); 

console.log("--- El loro comienza a repetir ---");


//Ciclo For: Bucle 
//Es ideal cdo sabemos cuantas veces queremos recibir
//Tiene 3 partes: 
// 1. Inicio (let i = 1) Creamos un contador que empieza en 1
// 2. condicion (i <= 5) Ciclo va a seguir mientras el contador sea menor o igual a 5
// 3. modificador (i++) Al final de cada vuelta le sumamos 1 al contador 

for(let i = 1; i <= 5; i ++){
    //lo que pongamos aqui adentro se va a ejecutar 5 veces
    console.log(i + " - " + mensaje);
    
}

console.log("---El loro se canso y se fue a dormir---");