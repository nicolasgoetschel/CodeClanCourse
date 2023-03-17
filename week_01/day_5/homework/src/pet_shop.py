# WRITE YOUR FUNCTIONS HERE
# return "Camelot of Pets"
def get_pet_shop_name(pet_shop):
    return pet_shop["name"]


# return 1000 via "admin" and "total_cash"
def get_total_cash(pet_shop):
    return pet_shop["admin"]["total_cash"]


# add and remove 10 for task 3 and 4 via "admin" and "total_cash"
def add_or_remove_cash(pet_shop, new_earnings):
    pet_shop["admin"]["total_cash"] += new_earnings


# return amount of pets_sold via "admin" and "pets_sold"
def get_pets_sold(pet_shop):
    return pet_shop["admin"]["pets_sold"]


# increase count of sold pets
def increase_pets_sold(pet_shop, sold):
    pet_shop["admin"]["pets_sold"] += sold


# return number of pets in stock
def get_stock_count(pet_shop):
    return len(pet_shop["pets"])


# return all the dogs from a particular breed for task 8 and 9
def get_pets_by_breed(pet_shop, breed):
    pets = pet_shop["pets"]
    return [race for race in pets if race["breed"] == breed]


# # # find pets by pet_name (why is this wrong?)
# def find_pet_by_name(pet_shop, name):
#     pets = pet_shop["pets"]
#     return [petname for petname in pets if petname["name"] == name]


def find_pet_by_name(pet_shop, name):
    for pet in pet_shop["pets"]:
        if pet["name"] == name:
            return pet


# remove a particular pet by name
def remove_pet_by_name(pet_shop, name):
    remove_pet = find_pet_by_name(pet_shop, name)
    pet_shop["pets"].remove(remove_pet)


# add new pet to stock
def add_pet_to_stock(pet_shop, new_pet):
    pet_shop["pets"].append(new_pet)


# get first customers cash (index 0, Alice)
def get_customer_cash(customer):
    return customer["cash"]


# remove 100 of Alice' 1000
def remove_customer_cash(customer, amount):
    customer["cash"] -= amount


# Get current pet amout for any customers
def get_customer_pet_count(customer):
    return len(customer["pets"])


# add Bors the Younger to Alice
def add_pet_to_customer(customer, new_pet):
    customer["pets"].append(new_pet)


# OPTIONAL

# # Check if Alice has enough money to afford new pet (Bors the Younger)
# def customer_can_afford_pet(customer, new_pet):
#     customers_cash = customer_cash(customer[0], cash)
