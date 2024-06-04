/* for loop */
const cars = ["ferrari", "aston martin", "audi", "hyundai"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

/* while loop */
let weather = ["sunny", "cloudy", "rainy", "snowy"];
let currentWeather = "rainy";

while (currentWeather != "sunny") {
  console.log("It's cold outside");
  currentWeather = weather[Math.floor(Math.random() * 4)];
}

console.log("lets go out!!!");

/* do .. while loop */

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
