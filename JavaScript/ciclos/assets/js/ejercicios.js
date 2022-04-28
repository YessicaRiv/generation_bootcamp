//escribe un ciclo anidado que imprima el siguiente patrón.

/*

*
**
***
****
*****

*/

/*for(let i=1; i<=5; i++) {     //1er vuelta //2da vuelta -- sucesivament
    for(let j=1; j<=i; j++){  //5 escribe las interaciones que se piden
        console.log("*");
        //console.log("ciclo hijo\n");
    }

    document.write("<br>"); 

}  */

/*let numeroPositivo = 10
do {
    console.log(numeroPositivo);
    numeroPositivo=numeroPositivo-0.5;
} while (numeroPositivo>0);  */


/* let modulo;
for(let i=1;i<100;i++){
    if(i%2==0){
        // modulo=i%2;
        // console.log(modulo); 
     }
    else{
        // modulo=i%2;
        // console.log(modulo);
        console.log('El numero '+i+' es impar');
    }
}   

*/


/*let n=6
let contador=1;
while (contador<=n) {
    document.write("["+contador+"]");
    contador++;

}
*/

let n=15;
let suma=0;

for(let i=1; i <=n; i++){
    suma=suma+i;
}
console.log(suma)
