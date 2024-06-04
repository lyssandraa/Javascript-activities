let password = "whatever123";

if (password.length < 8) {
  console.log("Error: Password must be at least 8 characters");
} else {
  console.log(password);
}

let num = 7;

if (num & (3 === 0) || num % 5 === 0) {
  console.log("this number is divisible by 3 or 5");
} else {
  console.log("it isnt divisible");
}
