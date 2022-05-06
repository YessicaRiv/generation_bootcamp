class Pokemon{
    //atributos 
    #nombre = "";
    #edad = 0;
    #evolucion = "";
    

    constructor(nombre,edad,evolucion){
        this.#nombre = nombre,
        this.#edad = edad;
        this.evolucion = evolucion;
        
    }

    
    

    atacar(){
        return console.log(`${this.#nombre}, está atacando`);
    }

    evolucionar(){
        let mensaje = ""
        //operador de cortocircuito
        //false => tomar el valor de la izquierda
        //true => tomar el valor de la derecha



        if(this.#evolucion === ""){
            mensaje = "No puedo evolucionar";
            console.log(mensaje);

        }else {
            mensaje = `${this.#nombre} ha evolucionado a ${this.evolucion}`;
            this.#nombre = this.#evolucion;
            console.log(mensaje);
        }
    }


}


        


/*
const charmander = new Pokemon("Charmander","2","Charmeleon","Fuego");
const bulbasaur = new Pokemon("Bulbasaur","1","Ivisaur","Planta");

console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
bulbasaur.atacar();

*/

//clase hija
class TipoFuego extends Pokemon{
    //atributos
    #tipo = "";

    constructor(nombre,edad,evolucion){
        super(nombre,edad,evolucion);
        this.#tipo = "Fuego";

    }

    atacar () {
    return console.log (`${super.nombre}, esta lanzando un ataque de tipo  ${this.tipo}`);
    
        
    }

}

let nombre = "Charmander";

const charmander = new TipoFuego("Charmander","2","Charmeleon");
console.log(charmander);

charmander.atacar();
//charmander.evolucionar();