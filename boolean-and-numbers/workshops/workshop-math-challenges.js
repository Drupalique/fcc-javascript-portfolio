// Workshop: Math Challenges
// Combine numeric logic into small utility functions.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fizzBuzz(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) results.push("FizzBuzz");
    else if (i % 3 === 0) results.push("Fizz");
    else if (i % 5 === 0) results.push("Buzz");
    else results.push(String(i));
  }
  return results;
}

console.log(isPrime(17), isPrime(18)); // true false
console.log(fizzBuzz(15).join(", "));

module.exports = { isPrime, fizzBuzz };
