// Workshop: Object Destructuring
// Practice extracting values from objects with destructuring syntax.

const user = {
  id: 42,
  username: "jdoe",
  profile: {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
  },
};

const { username, profile: { firstName, lastName } } = user;
console.log(username, firstName, lastName);

function formatUser({ username, profile: { email } }) {
  return `${username} <${email}>`;
}

console.log(formatUser(user));

const settings = { theme: "dark", fontSize: 14 };
const { theme, fontSize, language = "en" } = settings;
console.log(theme, fontSize, language);

module.exports = { formatUser };
