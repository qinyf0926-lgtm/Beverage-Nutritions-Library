var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Beverages%20Nutrition.csv"

var drinkNames = getColumn(url, 1);
var drinkTypes = getColumn(url, 2);
var sugerFree = getColumn(url, 3);
var drinkCalorie = getColumn(url, 4);
var drinkCarbohydrate = getColumn(url, 7);
var drinkCaffeine = getColumn(url, 10);

// console.log(drinkNames)


//Function 1
/*
Find beverage types by using the drink names.
names {string} - the name of the drink to search for.
return {list} - the list of the beverage type of the specific drink name.
*/
function findTypes(names){
  names = names.trim();
  var matches = [];
  for(var i = 0; i < drinkNames.length; i++){
    if (drinkNames[i].toLowerCase() === names.toLowerCase()){
      matches.push(drinkTypes[i]);
      return matches;
    }
    else {return "Not found"};
  }

}
console.log(findTypes(" Acai Berry Drink Fortified "));

//Function 2
/*
Use drink names to check whether it's sugar free.
name {string} - the drink name that you want to check.
return {boolean} - A boolean value indicating whether the drink is sugar-free, or the string "not found" if the drink does not exist.
*/
function whetherSugarFree(name){
  name = name.trim();
  var match = [];
  for (var i = 0; i < sugerFree.length; i++){
    if (name.toLowerCase() === drinkNames[i].toLowerCase()){
      return sugerFree[i];
    }
  }
  return "Not found"
}
console.log(whetherSugarFree(" Acai Berry Drink Fortified "));

//Function 3
/*
Use type to find the drink with the highest calorie within the types.
types {sting} - the type of drink to search within.
return {string} - The drink name with the highest calorie in the specific type.
*/
function findHighestCalorie(types){
  types = types.trim();
  var highestCalorie = 0;
  var highestName = "";
  for (var i = 0; i < drinkTypes.length; i++){
    if (drinkTypes[i].toLowerCase() === types.toLowerCase()){
      var calories = parseFloat(drinkCalorie[i]);
      if (calories > highestCalorie){
        highestCalorie = calories;
        highestName = drinkNames[i];
      }
      return highestName;
    }
    else {return "Not found"};
  }
}
console.log(findHighestCalorie(" juice "));

//Function 4
/*
Calculate the average carbohydrate of a specific type of beverage.
types {string} - the type of drink to calculate the average carbohydrates for.
return {number} - the average carbohydrate value for the specific drink type.
*/
function averageCarbohydrate(types){
  types = types.trim();
  var count = 0;
  var total = 0;
  var average = 0;
  for (var i = 0; i < drinkTypes.length; i++){
    if (drinkTypes[i].toLowerCase() === types.toLowerCase()){
      count++;
      var num = parseFloat(drinkCarbohydrate[i]);
      total += num;
      average = total / count;
    }
  }
  return average;
}
console.log(averageCarbohydrate(" Juice "));

//Function 5
/*
Use types to get caffeine-free beverages (caffeine = 0).
types {string} - the desired drink types that you want to check.
return {list} - the drink names of caffeine-free drinks of that type.
*/
function findCaffeineFree(types){
    types = types.trim();
    var zeroNames = [];
    for (var i = 0; i < drinkTypes.length; i++){
      if (drinkTypes[i].toLowerCase() === types.toLowerCase()){
        var zeroCaffeine = parseFloat(drinkCaffeine[i]);
        if(zeroCaffeine === 0){
          zeroNames.push(drinkNames[i]);
         }
        } 
    }
    if (zeroCaffeine === 0){
           return zeroNames;
    }
    else{
     return "Not found"
    }
}
console.log(findCaffeineFree(" Soda "));





//utils.js
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
