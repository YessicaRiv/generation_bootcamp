const db = [

    {
        url: "https://placeimg.com/200/200/animals", 
        title: "Animales",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores."
    },

]

{
    url: "https://placeimg.com/200/200/people", 
    title: "Animales",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores."
},


{
    url: "https://placeimg.com/200/200/nature", 
    title: "Tecnologia",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores."
},


{
    url: "https://placeimg.com/200/200/arch", 
    title: "Personas",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, asperiores."
}

]


const db = [

];

console.log(db[0].url);


const $cards = document.getElementById("cards");
$cards.innerHTML = "";

db.forEach(objeto => {
    $cards.innerHTML += ` 
    <div class="col mb-4">
    <div class="card">
      <img src="${obejto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
      `;

});


console.log(db);



//JSON
//stringify


const dbJSON = JSON.parse(db);

//convertir un objeto JSON a un String

console.log(dnJSON);

//convertir nuevamente a un JSON
console.log(JSON.parse(dbJSON));
//convierte una cadena

