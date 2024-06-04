const string =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const vowels = "aeiouAEIOU";

let lastVowelIndex = -1;
for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    lastVowelIndex = i;
  }
}

if (lastVowelIndex === -1) {
  console.log("No vowels found in the string");
} else {
  console.log(`Index of the last vowel: ${lastVowelIndex}`);
}
