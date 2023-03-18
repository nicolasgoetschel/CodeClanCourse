const assert = require('assert')
const Taxi = require('../taxi')

describe('Taxi', function () {
    let taxi 

    beforeEach(function () {
        taxi = new Taxi ('Toyota', 'Prius')
    })

    it('should have a manufacturer', function () {
        //Arrange
        const taxi = new Taxi('Toyota', 'Prius')
        // Act

        // Assert
        const actual = taxi.manufacturer
        const expected = 'Toyota'
        assert.strictEqual(actual, expected)
    })

    it('should have a model', function () {
        const taxi = new Taxi('Toyota', 'Prius')
        assert.strictEqual(taxi.model, 'Prius')
    })
})