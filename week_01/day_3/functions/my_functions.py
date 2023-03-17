def greet(name, time_of_day):  # parameter
    return "Good " + time_of_day + ", " + name + "!"  # concatenation


name_1 = "Mäusekind"
name_2 = "Pascal"
part_of_day1 = "morning"
part_of_day2 = "afternoon"

greeting = greet(name_1, part_of_day1)  # argument
print(greeting)

greeting_2 = greet("Pascal", "afternoon")
print(greeting_2)


def greet_2():
    pass


print(greet_2())


def greet_3():
    words = "Hey"
    return words


# def greet_4():
#     return words

# print(greet_4())

chickens = [
    {"name": "Margaret", "age": 2, "eggs": 0},
    {"name": "Hetty", "age": 1, "eggs": 2},
    {"name": "Henrietta", "age": 3, "eggs": 1},
    {"name": "Audrey", "age": 2, "eggs": 0},
    {"name": "Mabel", "age": 5, "eggs": 1},
]


# total_eggs = 0

# for chicken in chickens:
#     total_eggs += chicken["eggs"]
#     chicken["eggs"] = 0 # eggs have been collected

# print(f"{total_eggs} eggs collected") # interpolation


def collected_eggs(chicken_list):  # parameter
    total_eggs = 0

    for chicken in chicken_list:
        total_eggs += chicken["eggs"]
        chicken["eggs"] = 0  # eggs have been collected

        return f"{total_eggs} eggs collected"


print(collected_eggs())
