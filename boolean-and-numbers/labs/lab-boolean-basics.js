// Lab: Boolean Basics
// Practice declaring and evaluating boolean values.

let isRaining = true;
let hasUmbrella = false;

function shouldBringUmbrella(raining, ownsUmbrella) {
  return raining && ownsUmbrella;
}

console.log(shouldBringUmbrella(isRaining, hasUmbrella)); // false

let age = 17;
let isAdult = age >= 18;
console.log(isAdult); // false

let temperature = 85;
let isHot = temperature > 80;
let isComfortable = temperature >= 65 && temperature <= 80;
console.log(isHot, isComfortable); // true false

module.exports = { shouldBringUmbrella };
