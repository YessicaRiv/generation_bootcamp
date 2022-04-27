 const Arantxa = { 
    nombreCompleto: {
    nombre: "Arantxa", 
    apellido: "Perez"
    },
    edad: 26,
    pasatiempos: ["caminar", "patinar", "musica"]}



const gabriel = {
    nombreCompleto: {
        nombre: "ganriel",
        apellido: "gonzalez"
    },
    edad: 20,
    pasatiempos: ["jugar","salir","correr"],
}

const Donovan = {
    nombreCompleto: {
        nombre: "Donovan",
        apellido: "Martinez"
    },
    edad: 24,
    pasatiempos: ["futbol","Lectura","anime"]
}

const Luis = {
  nombreCompleto: {
    nombre: "Luis",
    apellido: "García",
  },
  edad: 23,
  pasatiempos: ["series", "ejercicio", "dormir"],
};

const Daniel = {
    nombreCompleto: {
        nombre: "Daniel",
        apellido: "Perez",
    },
    edad: 24,
    pasatiempos: ["fotografia", "peliculas", "leer"],
}

    const cohorte12 = [Arantxa,gabriel,Donovan,Luis,nuevaPersona],
    console.log(cohorte12 [0])

    for (let i=0; i<cohorte12.length; i++) {
        console.log(cohorte12[i].pasatiempos.includes("leer"));
    }