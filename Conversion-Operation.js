let Score = "33abc";
console.log("Type of Score: ", typeof Score); // Number if Score is a number (33)
console.log(typeof (Score)); //This Will also return the type of Score.

let valueinnumber = Number(Score); //Converting Score to Number
console.log("Type of valueinnumber: ", typeof valueinnumber); // Number

console.log(valueinnumber); //This will return NaN because Score is not a valid number.  

// ********** Operations ***********

let Value = 10; //Converting Value to Number
console.log("Type of Value: ", typeof Value); // Number
let NegativeValue = -Value; //This will return -10
console.log("Negative Value: ", NegativeValue); //This will return -10



let str1 = "Vatsal";
let str2 = " Shah";
console.log(str1 + str2); //This will return "Vatsal Shah"

console.log("1" + 1); //This will return "11" because 1 is converted to string and concatenated with "1"
console.log(1 + "1"); //This will return "11" because 1 is converted to string and concatenated with "1"
console.log(1 + 1 + "1"); //This will return "21" because 1 + 1 is evaluated first and then concatenated with "1"
console.log("1" + 2 + 2); //This will return "122" because "1" is concatenated with 2 and then concatenated with 2
console.log(1 + 2 + "2"); //This will return "32" because 1 + 2 is evaluated first and then concatenated with "2"              

console.log(3 + 35 / 7 * 5 - 2); //This will return 26 because of the order of operations

console.log(3 + 35 / (7 * 5) - 2); //This will return 2 because of the order of operations

