import random

vase = []
for i in range(0, 70):
    vase.append(random.randint(1, 7))

random_picks = []

number1 = 0
number2 = 0
number3 = 0
number4 = 0
number5 = 0
number6 = 0
number7 = 0

for i in range(0, 20):
    index = random.randint(0, 69)
    if vase[index] == 1:
        number1 += 1
    elif vase[index] == 2:
        number2 += 1
    elif vase[index] == 3:
        number3 += 1
    elif vase[index] == 4:
        number4 += 1
    elif vase[index] == 5:
        number5 += 1
    elif vase[index] == 6:
        number6 += 1
    elif vase[index] == 7:
        number7 += 1
    random_picks.append(vase[index])

print("Probability of getting Number 1 Color ball is ", number1)
print("Probability of getting Number 2 Color ball is ", number2)
print("Probability of getting Number 3 Color ball is ", number3)
print("Probability of getting Number 4 Color ball is ", number4)
print("Probability of getting Number 5 Color ball is ", number5)
print("Probability of getting Number 6 Color ball is ", number6)
print("Probability of getting Number 7 Color ball is ", number7)
