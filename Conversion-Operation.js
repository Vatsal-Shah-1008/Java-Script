let Score = "33abc";
console.log("Type of Score: ", typeof Score); // Number if Score is a number (33)
console.log(typeof (Score)); //This Will also return the type of Score.

let valueinnumber = Number(Score); //Converting Score to Number
console.log("Type of valueinnumber: ", typeof valueinnumber); // Number

console.log(valueinnumber); //This will return NaN because Score is not a valid number.  

