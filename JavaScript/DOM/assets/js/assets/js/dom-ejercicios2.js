//const parrafo = document.querySelector("#text")

//function js_style() {
  // parrafo.classList.toggle("texto-diferente");
//} 


const enviar = document.querySelector('.enviar');
const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');

enviar.addEventListener('click', () => {
    console.log(nombre.value, apellido.value);
});
   

