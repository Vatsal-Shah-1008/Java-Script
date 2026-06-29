console.log(2 > 1); //This will return true because 2 is greater than 1
console.log(2 < 1); //This will return false because 2 is not less than 1
console.log(2 >= 1); //This will return true because 2 is greater than or equal to 1
console.log(2 <= 1); //This will return false because 2 is not less than or equal to 1
console.log(2 == 1); //This will return false because 2 is not equal to 1
console.log(2 != 1);  //This will return true because 2 is not equal to 1


console.log("2" > 1); //This will return true because "2" is converted to number 2 and then compared with 1
console.log("2" < 1); //This will return false because "2" is converted to number 2 and then compared with 1
console.log("2" >= 1); //This will return true because "2" is converted to number 2 and then compared with 1
console.log("2" <= 1); //This will return false because "2" is converted to number 2 and then compared with 1
console.log("2" == 2); //This will return true because "2" is converted to number 2 and then compared with 2

console.log(null > 0); //This will return false because null is converted to 0 and then compared with 0
console.log(null < 0); //This will return false because null is converted to 0 and then compared with 0 
console.log(null == 0); //This will return false because null is not equal to 0 
console.log(null >= 0); //This will return true because null is converted to 0 and then compared with 0
console.log(null <= 0); //This will return true because null is converted to 0 and then compared with 0 

console.log(undefined > 0); //This will return false because undefined is converted to NaN and then compared with 0
console.log(undefined < 0); //This will return false because undefined is converted to NaN and then compared with 0         
console.log(undefined == 0); //This will return false because undefined is not equal to 0


// Strict Equality Operator (===)
console.log(2 === 2); //This will return true because both values are of the same type and value
console.log(2 === "2"); //This will return false because both values are of different types
console.log(null === null); //This will return true because both values are of the same type and value
console.log(undefined === undefined); //This will return true because both values are of the same type and value
console.log(null === undefined); //This will return false because both values are of different types
