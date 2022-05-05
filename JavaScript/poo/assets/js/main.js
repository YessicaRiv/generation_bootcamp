class Persona {
    //atributos
    id = 0; 
    static contador = 0;
    nombre = ""; //variable privada
    edad = 0;
    correo = "";
    
    constructor(nombre, edad, correo){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.id= ++this.contador;
    } 

    //Setters & getters
    //set & get 
    //fijar & obtener
    //se usan como si fueran atributos
    get nombre(){
        return this.nombre;
    }

    set nombre(nombre) {
        this.nombre = nombre;

    } 

    get getEdad(){
        return this.edad;

    }

    set setEdad(edad){
        this.edad = edad;
    }

    //métodos
    cambiarNombre(nombre){
        this.nombre = nombre;
}

saludar(){
    let mensaje = `Hola mi nombre es ${this.getNombre}`;
    return mensaje; 
}

mostrarSaludo(){
    return this.saludar();
}

mostrarContador(){
    return Persona.contador;
}

}

//instancia de la clase persona
const persona1 = new Persona("Pedro","30","pedro@gmail.com");
const persona2 = new Persona("Gabriel","25","gabriel@gmail.com");
const persona3 = new Persona("Martín","32","martin@gmail.com");

persona1.setNombre = "José"

persona2.cambiarNombre = "Antonio"

console.log(persona1);
console.log(persona2);
console.log(persona3);


console.log(persona1.saludar);
console.log(persona2.saludar);

console.log(persona1.mostrarSaludo);
console.log(persona2.mostrarSaludo);







