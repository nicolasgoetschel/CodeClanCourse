# create a dictionary to store meals
meals = { 
    "breakfast": "yoghurt", 
    "lunch": "roll", 
    "dinner": "steak",
    "supper": "toast"
    }

# breakfast = meals["breakfast"]
# print(breakfast)

# lunch = meals["lunch"]
# print(lunch)


# meals["supper"]

# print("supper" in meals)

# meals["lunch"] = "fish & chips"
# print(meals)

# del(meals["breakfast"])
# print(meals)

countries = {
    "UK": {
        "population": 10,
        "capital": "London"
    },
    "Germany": { 
        "population": 12,
        "capital": "Berlin"
    },
    "Switzerland": {
        "population": 8,
        "capital": "Bern",
        "languages": ["German", "French", "Italian"]
    }
}
print(countries["UK"]["capital"])
print(countries["Switzerland"]["languages"][1])

