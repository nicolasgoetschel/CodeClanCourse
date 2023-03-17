from another_modules_package.another_mathematical_module import add as useless_add


def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    return num1 // num2


print(useless_add())
