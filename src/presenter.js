import esMultiplo from "./fizzbuzz.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#FizzBuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const cad=esMultiplo(firstNumber);
  console.log(cad);

  div.innerHTML = "<p>" + cad + "</p>";
});