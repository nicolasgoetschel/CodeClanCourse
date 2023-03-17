# score = 6 

# # if score > 5: 
# #     result = "pass"

# # else:
# #     result - "fail"    

# result = "pass" if score > 5 else "fail"

# print(result)    

nick_hungry = True
nick_angry = True

if nick_hungry == True and nick_angry == True:
    print("Nick is hangry")

nick_angry = False

if nick_hungry or nick_angry:
    print("Nick is grumpy")