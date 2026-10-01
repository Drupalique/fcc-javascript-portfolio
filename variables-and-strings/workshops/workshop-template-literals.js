// Workshop: Template Literals
// Practice building dynamic strings with template literals.

function buildReceipt(item, price, quantity) {
  const total = (price * quantity).toFixed(2);
  return `${quantity}x ${item} @ $${price.toFixed(2)} = $${total}`;
}

console.log(buildReceipt("Coffee", 3.5, 2)); // 2x Coffee @ $3.50 = $7.00

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}! Hope you're having a great day.`;
}

console.log(greetUser("Sam", "morning"));

function multilineSummary(title, items) {
  return `${title}:\n${items.map((item) => `  - ${item}`).join("\n")}`;
}

console.log(multilineSummary("Shopping List", ["Milk", "Eggs", "Bread"]));

module.exports = { buildReceipt, greetUser, multilineSummary };
