import esMultiplo3 from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("si el numero es 3 es considerado multiplo de 3", () => {
    expect(esMultiplo3(3)).toEqual(true);
  });
  it("si el numero es 5 no es considerado multiplo de 3", () => {
    expect(esMultiplo3(5)).toEqual(false);
  });
  it("si el numero es divisible entre 3 es considerado multiplo de 3", () => {
    expect(esMultiplo3(30)).toEqual(true);
  });
  it("si el numero no es divisible entre 3 no es considerado multiplo de 3", () => {
    expect(esMultiplo3(1)).toEqual(false);
  });
});

