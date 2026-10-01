// Lab: Number Operations
// Practice arithmetic operators and numeric conversions.

function average(numbers) {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}

console.log(average([4, 8, 15, 16, 23, 42])); // 18

function roundToCents(value) {
  return Math.round(value * 100) / 100;
}

console.log(roundToCents(19.9999)); // 20

function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(7), isEven(10)); // false true

module.exports = { average, roundToCents, isEven };
