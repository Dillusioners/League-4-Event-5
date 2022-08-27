#Made by LeeTuah ...program 4 of SuperB's league 4 final event

#Returns the number of Divisors of a numbers
def divisors(n):
    divisor_count = 0
    for i in range(1, n+1):
        if(n % i == 0):
            divisor_count += 1
    return divisor_count


#Finding the number with 2**500500 divisors  
j = 999999999999999999999999999999999999999999999999999999999999
for i in range(99999999999999999999999999, j+2):
    n = divisors(i)
    if(n == 2**500500):
        print(n)
        break
    j += 1
