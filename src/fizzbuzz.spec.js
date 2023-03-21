import esMultiplo from "./fizzbuzz.js";

describe("fizzbuzz", () => {
//   it("si el numero es 3 es considerado multiplo de 3", () => {
//     expect(esMultiplo(3)).toEqual('Fizz');
//   });
//   it("si el numero es 5 es considerado multiplo de 5", () => {
//     expect(esMultiplo(5)).toEqual('Buzz');
//   });
//   it("si el numero es divisible entre 3 es considerado multiplo de 3", () => {
//     expect(esMultiplo(9)).toEqual('Fizz');
//   });
//   it("si el numero no es divisible entre 3 ni entre 5 no es considerado multiplo", () => {
//     expect(esMultiplo(1)).toEqual(1);
//   });

//   it("si el numero es multiplo de 5 y de 3 es considerado multiplo", () => {
//     expect(esMultiplo(30)).toEqual('FizzBuzz');
//   });
it("si el numero es 5 se espera la siguiente cadena: 1,2,Fizz,4,Buzz", () => {
    expect(esMultiplo(5)).toEqual([1,2,"Fizz",4,"Buzz"]);
    });
});