const busquedaInf = window.location.href.split("=").pop()
console.log(busquedaInf);


const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`

fetch(urlBusqueda).then(resp => resp.json()).then(datos => {
    console.log(datos.data);

    const resultadosBusqueda.forEach(resultado) => {
        console.log(resultado);


        const datosNecesarios = {
            nombre:resultado.title
            imagen: resultado.images.jpg.image_url
        }

        const template = 
        <div class="container">
          <div class = "row">
              <div class = "col-3">
                  </div>
                  <div class = "col-9">
                      <h2>
                          Ultimos animes
                      </h2>


                      busquedaAnimes.innerHTML += template
                      console.log();


    })
})