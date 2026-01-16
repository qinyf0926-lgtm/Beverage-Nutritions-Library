# Beverage-Nutritions-Library
Function number 1) gives us a list of bevarage type of the specific drink name. 
Function number 2) gives us if the the juice is true or false depending on if it is sugar free or non sugar free. If the drink if sugar free it gives us true the drink is sugar free, and if the drink has sugar it gives us flase the dink has sugar. 
Function number 3) gives us the highest caleries in a specific drink type. 
Function number 4) gives us the average number of carbohydrates in a specific drink type. 
Function number 5) gives us the cafeine free drink in a specific type of drinks.
#
#### Find beverage types by using the drink names.
##### @param names {string} - the name of the drink to search for.
##### @return return {list} - the list of the beverage type of the specific drink name.
**`function findTypes(names)`**
#

#### Use drink names to check whether it's sugar free.
##### @param name {string} - the drink name that you want to check.
##### @return return {boolean} - A boolean value indicating whether the drink is sugar-free, or the string "not found" if the drink does not exist.
**`function whetherSugarFree(name)`**
#

#### Use type to find the drink with the highest calorie within the types.
##### @param types {sting} - the type of drink to search within.
##### @return return {string} - The drink name with the highest calorie in the specific type.
**`function findHighestCalorie(types)`**
#

#### Calculate the average carbohydrate of a certain type of beverage.
##### @param types {string} - the type of drink to calculate the average carbohydrates for.
##### @return return {number} - the average carbohydrate value for the specific drink type.
**`function averageCarbohydrate(types)`**
#

#### Use types to get caffeine-free beverages (caffeine = 0).
##### @param types {string} - the desired drink types that you want to check.
##### @return return {list} - the drink names of caffeine-free drinks of that type.
**`function findCaffeineFree(types)`**
#
