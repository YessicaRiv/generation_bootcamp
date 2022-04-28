
addEventListener("load", function(){
    this.alert("Se ha terminado de cargar la página");
});




function saludar(){
alert ("Hola");

}


/*Manejador de eventos semanticos*/
const $botonSemantico = document.getElementById("evento-semantico");

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento) {
    alert("Hola desde un manejador semantico");
    //console.log(evento.target);//
}


/* Manejador de eventos multiple*/
const $botonMultiple = document.getElementById("evento-multiple");

$botonMultiple.addEventListener("click", saludarMultiple()
{
    alert("hola desde manejador multiple");
})

$botonMultiple.addEventListener("click", function(e){
    console.log(e.target);
})

function saludarMultiple (){
alert("Hola desde manejador multiple");

}




