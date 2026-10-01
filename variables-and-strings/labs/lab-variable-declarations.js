// Lab: Variable Declarations
// Practice let, const, and var scoping/behavior.

let score = 0;
score += 10;
console.log(score); // 10

const PI = 3.14159;
// PI = 3; // Would throw: Assignment to constant variable.

function demonstrateScope() {
  var functionScoped = "I am function scoped";
  if (true) {
    let blockScoped = "I am block scoped";
    console.log(blockScoped);
  }
  console.log(functionScoped);
}

demonstrateScope();

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

module.exports = { demonstrateScope };
