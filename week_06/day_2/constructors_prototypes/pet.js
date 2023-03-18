const Pet = function (name, species) {
    this.name = name;
    this.species = species;

    }
Pet.prototype.eat = function (food) {
    console.log(`${this.name} ate a ${food}`);
}

module.exports = Pet;

// const scooby = new Pet('Scooby Doo', 'dog');
// scooby.eat('Scooby Snack');


// console.log(scooby);
