
function voltearPalabra(a = "") {


    if (a <= 1) { return console.warn("No ingresaste texto");
        
    }
    if (typeof(a) !== "string") { return console.warn("No es un texto");
        
    }
    
    let palabraVolteada = a.split('').reverse('').join('');
    /* console.log(palabraVolteada); */

    if (a === palabraVolteada) {
        console.log(`Si en un palindromo ${a}`);

        
    }
    else 
    console.log("No es un palindromo");

}



/*Ejercicio 2*/


function miFuncion (palabra)(veces) {
    for let i=0; i < veces; 1++) {
        console.log(palabra);
    }
}

miFuncion("Hola mundo",3)



/*Ejercicio 3*/



function txtSustraer(cadena,numeroLetras){
    return cadena.substring(0, numeroLetras);
}
console.log(txtSustraer('Hola Mundo',3));




/*Ejercicio 4*/

function fact (num) {
	var factorial = 1; 
	for (i=1; i<=num; i++) {
		factorial = factorial * i; 
	}
	return factorial; 
}

console.log(fact(3))

