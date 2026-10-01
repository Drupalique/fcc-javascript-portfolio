// Lab: String Basics
// Practice string creation, concatenation, and indexing.

const firstName = "Ada";
const lastName = "Lovelace";
const fullName = firstName + " " + lastName;
console.log(fullName); // Ada Lovelace

console.log(fullName.length); // 13
console.log(fullName[0]); // A
console.log(fullName.toUpperCase()); // ADA LOVELACE
console.log(fullName.indexOf("Lovelace")); // 4

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh

module.exports = { fullName, reverseString };
