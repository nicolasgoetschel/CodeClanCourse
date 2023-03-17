# While Loop - For Loop

# DRY code - Don't Repeat Yourself
# WET code - Write Everything Twice - Don't do this!

# While Loop
# counter = 0
# my_number = 10

# while (counter < my_number):
#     print(f"counter is {counter}")
#     counter += 1

# my_number = 5
# value = int(input("What number am  thinking? "))

# while (value != my_number):
#     if (value > my_number):
#         print("Too High!")
#     else:
#         print("Too Low!")
#     value = int(input("Guess again... "))     
# 
# # For Loop
# numbers = [1, 2, 3, 4, 5]
# total = 0 

# for number in numbers:
   
#     # total = total - number
#     total += number

# print(total)


chickens = [
  {"name": "Margaret", "age": 2, "eggs": 0},
  {"name": "Hetty", "age": 1, "eggs": 2},
  {"name": "Henrietta", "age": 3, "eggs": 1},
  {"name": "Audrey", "age": 2, "eggs": 0},
  {"name": "Mabel", "age": 5, "eggs": 1},
]

total_eggs = 0

for chicken in chickens:
    total_eggs += chicken["eggs"]
    chicken["eggs"] = 0

print(f"{total_eggs} eggs collected")
print(chickens)    
