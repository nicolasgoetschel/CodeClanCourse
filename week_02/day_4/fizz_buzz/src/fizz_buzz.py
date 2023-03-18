def fizz_buzz(number):
    if type(number) == type(1.2):
        number = int(number)
    if type(number) != type(1):
        return "Function will only accept a number"
    elif number % 15 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"     
    elif number % 5 == 0:
        return "Buzz"
    else:
        return f"{number}"    




