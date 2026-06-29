// Primitive  Data Types
// 7 Types of Primitive Data Types in JavaScript
// 1. String, 2. Number, 3. Boolean, 4. Undefined, 5. Null, 6. Symbol, 7. BigInt

// const Score = 33; // Number
// const Name = "Vatsal"; // String
// const isActive = true; // Boolean
// let value; // Undefined
// const emptyValue = null;
// const uniqueId = Symbol("123"); // Symbol
// const Id = symbol("123"); // Symbol
// console.log(uniqueId === Id); // This will return false because both symbols are unique

// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Non-Primitive Data Types
// 1. Object, 2. Array, 3. Function

const Students = ["Vatsal", "Sanjay", "Raj"];

let myObj = {
    Name: "Vatsal",
    Age: 22,
    isActive: true
};

const myFunction = function() {
    console.log("Hello World");
};

console.log(typeof Students, typeof myObj, typeof myFunction);
// Output: object object function