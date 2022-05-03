const url = "https://api.thecatapi.com/v1/images/search"


const imagen = document.getElementById("ImagenGatito")
const imagen2 = document.getElementById("ImagenGatito2")
const btnMichi = document.querySelector(".btn-michi");
console.log(btnMichi);

fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos);
    imagen.src = datos.message
})


async function obtenerGatito(){
    const infoGatitos = await fetch(url)
    const gatito = await infoGatitos.json()
    console.log(gatito);
    imagen2.src = gatito.message

}

obtenerGatito()
