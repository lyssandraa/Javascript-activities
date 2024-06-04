const person = {
  name: "Lysandra",
  eyeColour: "brown",
  age: 23,
  sayHi: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

person.sayHi();
