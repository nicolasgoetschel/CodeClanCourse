# Part 1

ages = [5, 15, 64, 27, 84, 26]

# Return a list of only the odd ages

# odd_ages = [age for age in ages if age % 2 != 0]
print([age for age in ages if age % 2 != 0])



# Part 2

chicken_names = ["Hen Solo", "Cluck Norris", "Hennifer Lopez", "ChewPekka", "Feather Locklear"]

# Return a list with chickens whose names are more than 10 characters
# Return a list of chickens whose names start with the letter H

mineleven = [name for name in chicken_names if len(name) > 10]
print(mineleven)

h_names = [name for name in chicken_names if name[0].lower() == 'h']
print(h_names)


# Part 3

words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

first_letters = [word[0].lower() for word in words]
print(first_letters)


# Build a new list with the first letter from each word
# Convert each letter to lower case

# Expectedd output: ["t", "q", "b", "f", "j", "o", "t", "l", "d"]

# Hint : Strings in Python work as if they were a tuple full of characters.
#        How would you get the first element from a tuple or list?























