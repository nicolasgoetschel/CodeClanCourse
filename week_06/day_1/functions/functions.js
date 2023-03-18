// Function declaration
// function sayHello(name) { //  parameter
function sayHello(name='World') { //  default parameter
    return `Hello ${name}!`
}

// console.log('sayHello message:', sayHello) // referencing a function
// console.log('sayHello message:', sayHello()) // invoking a function
console.log('sayHello message:', sayHello()) // argument

// Function expression
var add = function (firstNumber, secondNumber) {
    return firstNumber = secondNumber
}

console.log('1 + 3 with add:', add(1,3))

// arrow function
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber // implicit return

console.log('multiply 2 by 5:', multiply(2, 5))

//d Declare a named function that takes an array of numbers,
// and returns the sum, or total, of all of the numbers in the array

function calculateTotal(numbers) {
    var total = 0
    for ( var number of numbers) {
        total += number
    }
    return total
}

var sum = calculateTotal([10, 40, 200, 50])
console.log('sum of array of numbers:', sum)

//Define an anonymous function expression that takes two arguments:
// - an object, for example, {name: 'Wojtek', age: 30}
// - a string, for example, 'name'

// Your function should return true if the given string is a key on the given object
// and false if the object does not have a key that matches the string.
// Store this function in an appropriately named variable to invoke it.

var objectHasKey = function (object, searchString) {
    for (var key in object) {
        if (searchString === key) {
            return true
        }
    }
    return false
}

var person = {
    name: 'Wojtek',
    age: 30
}

var keyIsFound = objectHasKey(person, 'name')
console.log('keyIsFound should be true:', keyIsFound)

var keyIsNotFound = objectHasKey(person, 'email')
console.log('keyIsNotFound should be false:', keyIsNotFound)

;(function () {
    console.log('Hi!')
})()