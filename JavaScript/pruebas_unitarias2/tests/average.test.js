/*const {average} = require("../para_probar");

describe("average", () => {
 
    test("ingresar un solo valor", () => {
        const resultado = average([1]);

        expect(resultado).toBe(1);
    }) */

    test("ingresar un solo valor", () => {
        expect(average([1])).toBe(1);

        expect(resultado).toBe(1);
    });

    test("usando multiples valores", () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });


    


    


