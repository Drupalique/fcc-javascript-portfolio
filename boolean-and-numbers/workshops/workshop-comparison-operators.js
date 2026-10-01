// Workshop: Comparison Operators
// Build a simple grade calculator using comparison and logical operators.

function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function isPassing(score) {
  return score >= 60;
}

const scores = [95, 82, 71, 58, 60];
scores.forEach((score) => {
  console.log(`${score}: ${getLetterGrade(score)} (passing: ${isPassing(score)})`);
});

module.exports = { getLetterGrade, isPassing };
