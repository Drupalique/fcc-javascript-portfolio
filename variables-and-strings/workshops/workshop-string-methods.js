// Workshop: String Methods
// Build small text-processing utilities using built-in string methods.

function slugify(title) {
  return title.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

console.log(slugify("  Hello, World!  ")); // hello-world

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 20));

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("JavaScript")); // 3

module.exports = { slugify, truncate, countVowels };
