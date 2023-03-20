import esMultiplo3 from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("si el numero es 3 es considerado multiplo de 3", () => {
    const result = esMultiplo3(3)
    expect(result).toEqual(true);
  });
});

