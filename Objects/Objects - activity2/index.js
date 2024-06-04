const pet = {
  name: "Max",
  typeOfPet: "Doberman",
  age: 3,
  colour: "black",
  eat: function () {
    return `${this.name} is eating`;
  },
  drink: function () {
    return `${this.name} is drinking`;
  },
};

console.log(pet.eat());
console.log(pet.drink());
