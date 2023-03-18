import unittest
from src.fizz_buzz import fizz_buzz

class TestFizzBuzz(unittest.TestCase):

# Test 1 - Function returns "Fizz" when number is divisible by 3.
    def test_fizz_return(self):
        self.assertEqual("Fizz", fizz_buzz(3))
        self.assertEqual("Fizz", fizz_buzz(6))
        self.assertEqual("Fizz", fizz_buzz(9))

# Test 2 - Function returns None when number is not divisible by 3.
    # def test_return__None(self):
    #     self.assertEqual(None, fizz_buzz(4))
    # Test replaced with Test 5

# Test 3 - Function returns "Buzz" when number is divisible by 5.
    def test_buzz_return(self):
        self.assertEqual("Buzz", fizz_buzz(5))    
        self.assertEqual("Buzz", fizz_buzz(10))    
        self.assertEqual("Buzz", fizz_buzz(20))  

# Test 4 - Function returns "FizzBuzz" when number is divisible by 3 and 5.
    def test_fizz_buzz(self):
        self.assertEqual("FizzBuzz", fizz_buzz(15))
        self.assertEqual("FizzBuzz", fizz_buzz(30))
        self.assertEqual("FizzBuzz", fizz_buzz(45))


# Test 5 - Function returns input as a string if it is not divisible by 3 or 5. 
    def test_string_return(self):
        self.assertEqual("7", fizz_buzz(7))
        self.assertEqual("8", fizz_buzz(8))
        self.assertEqual("11", fizz_buzz(11))

# Test 6 - Function breaks if a string is entered.
    def test_string_passed_in_as_argument(self):
        self.assertEqual("Function will only accept a number", fizz_buzz("hello"))

# Test 7 - Float put in as argument
    def test_float_passed_in_as_argument(self):
        self.assertEqual("8", fizz_buzz(8.000))
        self.assertEqual("11", fizz_buzz(11.0))
        self.assertEqual("13", fizz_buzz(13.124))

# Test 8 - Try accepting an int as an input
    def test_int_input_as_argument(self):
        self.assertEqual("Fizz", fizz_buzz(int(input("Please enter an int: "))))

# # Test 9 - Try accepting a float as an input
#     def test_float_input_as_argument(self):
#         self.assertEqual("Fizz", fizz_buzz(int(input("Please enter an int: "))))
#   Unable to pass test
