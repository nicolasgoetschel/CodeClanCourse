const Person = function (name, pet) {
    this.name = name;
    this.pet = pet;

    }
Person.prototype.greet = function () {
    console.log(`Hi! My name is ${this.name}`);
}

Person.prototype.feedPet = function (food) {
    const message = `${this.name} fed ${this.pet.name} a ${food}`
    console.log(message);
    this.pet.eat(food);
}

module.exports = Person;

// const shaggy = new Person('Shaggy Rogers');
// shaggy.greet();
// const velma = new Person('Velma Dinkley');
// velma.greet();

// console.log(shaggy);
// console.log(velma);
// console.log("shaggy's prototype:", Object.getPrototypeOf)
