const nombre = "Yessica"
const nombre2 = new String("Samara");


const persona = new Object();
persona.nombre = "Yessica"
persona.apellido = "Rivera"
persona.edad = "23"


console.log(persona);



const nuevaPersona = {
    nombreCompleto: {
        nombre: "Samara", 
        apellido: "Amaro"
    },
 
    edad: 23,
    pasatiempos: ["nadar", "dibujar", "leer"],
    tieneTrabajo: true,
    /*metodo*/
    saludar: function () {
        console.log("Hola") 
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1 + n2}`)
    }
}

"Hola".length /*atributo o propiedad */
"Hola".toLowerCase() /*Metodo*/


console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre)
console.log(nuevaPersona.pasatiempos[1]);

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/*Para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona)

/*Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Morado"
console.log(nuevaPersona.colorFavorito)



console.log(nuevaPersona.hasOwnProperty("edades"))


console.log(Object.keys(nuevaPersona));
console.log(Object.values(nuevaPersona));

