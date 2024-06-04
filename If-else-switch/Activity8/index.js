let word = "madam";

function isLastLetterSameAsFirst(str) {
  if (str.length <= 1) {
    return false;
  }

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];

  return firstLetter === lastLetter;
}

if (isLastLetterSameAsFirst(word)) {
  console.log(`${word} has the same first and last letter`);
} else {
  console.log(`${word} does not have the same first and last letter`);
}
