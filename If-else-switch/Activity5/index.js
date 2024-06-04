let num;

function isPalindrome(number) {
  const strNum = number.toString();
  for (let i = 0; i < strNum.length / 2; i++) {
    if (strNum[i] !== strNum[strNum.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

num = 121;
if (isPalindrome(num)) {
  console.log(`${num} is a palindrome`);
} else {
  console.log(`${num} is not a palindrome`);
}
