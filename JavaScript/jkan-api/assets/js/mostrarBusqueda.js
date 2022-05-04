const busquedaInf = window.location.href.split("=").pop()
console.log(busquedaInf);


const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`

fetch(urlBusqueda).then(resp => resp.json()).then(datos => {
    console.log(datos.data);

    const resultadosBusqueda.forEach(resultado) => {
        console.log(resultado);


        const datosNecesarios = {
            nombre:resultado.title
            imagen:images.jpg.image_url
        }
    })
})