const idInfo = window.location.href.split("=").pop()
console.log(idInfo);

const urlID = `https://api.jikan.moe/v4/anime/%7Bid%7D ${idInfo}`

fetch(urlID).then(resp => resp.json()).then(datos => {
    /*console.log(datos.data); */

    const datosNecesarios = {
        id:datos.data.mal_id
        imagen: datos.data.images.jpg.image_url,
        sinopsis:datos.data.synopsis,
        nombre: datos.data.title
    }

    console.log(datosNecesarios);
})