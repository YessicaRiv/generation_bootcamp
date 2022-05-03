/*let tiempo = 5000
let = datos

setTimeout(()=>{
    let datos = "Yessica"
    console.log(datos);
},tiempo)

console.log("datos");

console.log("Hola"); */

const datos = [
{
    nombre: "Yessica",
    edad: 27
    
},
{
    nombre: "Raul",
    edad: 30
    
},
{
    nombre: "Adolfo",
    edad: 28
    
},


]
function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
          resolve(datos)
    },3000)
    

    })
}

obtenerDatos().then((datos) => {
    console.log(datos);
}) 

async function obtenerDatosAsync () {
    const datosObtenidos = await obtenerDatos ()
    console.log(datosObtenidos);
}

obtenerDatosAsync()





