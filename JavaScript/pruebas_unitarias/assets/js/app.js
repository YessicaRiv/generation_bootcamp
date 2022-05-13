const suma = (a,b) => {
    return a - b;

}

/*console.log((suma(1,3) === 4));
console.log((suma(0,0) === 0));
console.log((suma(5,5) === 10)); */

const arr = [
    {a:1,b:3, resultado: 4},
    {a:1,b:0, resultado: 0},
    {a:1,b:5, resultado: 10},
    {a:1,b:30, resultado: 40},

     
]

arr.forEach(prueba => {
    const { a, b, resultado } = prueba; //destruccturación
    console.assert(suma(a,b) === resultado, 
    `Suma de ${a} y ${b} debería ser ${resultado}`);
});

