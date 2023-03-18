class Guest:
    def __init__(self, name, age, money):
        self.name = name
        self.age = age
        self.wallet = money

    def remove_money(self, amount):
        self.wallet -= amount