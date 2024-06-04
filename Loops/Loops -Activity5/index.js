let numbers = [];

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 30) + 1;
  numbers.push(randomNumber);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 7 === 0) {
    console.log(`The number ${numbers[i]} is divisible by 7.`);
  } else {
    console.log(`The number ${numbers[i]} is NOT divisible by 7.`);
  }
}
