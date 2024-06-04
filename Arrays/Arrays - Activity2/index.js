const cars = ["Ferrari", "Range Rover", "Audi"];

console.log(cars);

cars.splice(2, 0, "bmw");

console.log(cars);

const cars1 = cars.shift();
console.log(cars1);
