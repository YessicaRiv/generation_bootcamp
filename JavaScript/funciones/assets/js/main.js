/*Funciones, nos permiten reutilizar código*/

function saludar (nombre ="panchito", apellido = "") {
 
    //string normal
    //console.log('Hola mi nombre es: ', nombre, apellido); 
    //Template Strings || Plantillas literales
   // console.log(`Hola mi nombre es: ${nombre?"Raul":"desconocido"}`);
   return `${nombre} ${apellido} ` ;
}

saludar("Pedro", "Perez"); //la invocacion o llamada funcion

let funcionSaludar = saludar ("Felipe", "Maqueda");

console.log(funcionSaludar);

console.log(saludar("Alberto", "Hernandez"));

/*document.white('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1></h1>');
console.log(`<h1>Este es un h1></h1> `) //plantilla literal */

/*
if() {
    codigo
} else {

}
*/




/*Función declarada*/
function suma(a,b){
    return a + b;
}

console.log(suma(10,20));
/*hoisting
*/


/*Funciones expresadas || fincion expresión*/
const resta = function (a,b){
    return a - b;

}

console.log(resta(30,10));



/*setTimeout (() =


