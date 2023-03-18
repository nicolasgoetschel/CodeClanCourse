const Pet = require('./pet.js');
const Person = require('./person.js');

const scooby = new Pet('Scooby Doo', 'dog');

const shaggy = new Person('Shaggy Rodgers', scooby);
shaggy.feedPet('Scooby Snack');


