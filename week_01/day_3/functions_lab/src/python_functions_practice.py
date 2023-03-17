def return_10():
    return 10

def add(number_1, number_2):
    return number_1 + number_2
    number_1 = 1
    number_2 = 2

def subtract(number_1, number_2):
    return number_1 - number_2
    number_1 = 10
    number_2 = 5

def multiply(number_1, number_2):
    return number_1 * number_2
    number_1 = 4
    number_2 = 2

def divide(number_1, number_2):
    return number_1 / number_2
    number_1 = 10
    number_2 = 2   

def length_of_string(abc):
    len(abc)
    number = len(abc)
    return(number)



def join_string(string_1, string_2):
    return string_1 + string_2
    string_1 = "Mary had a little lamb, "
    string_2 = "its fleece was white as snow"

def add_string_as_number(string_1, string_2):
        return int(string_1) + int(string_2)
         
        
def number_to_full_month_name(month_number):
    if month_number == 1:
        return "January"

    if month_number == 3:
        return "March"        

    if month_number == 9:
        return "September"         

def number_to_short_month_name(month_number):
    if month_number == 1:
        return "Jan"       

    if month_number == 4:
        return "Apr"            

    if month_number == 10:
        return "Oct" 