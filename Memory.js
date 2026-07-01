// Stack (Primitive), Heap (Non-Primitive)

let MyName = "Vatsal"; // Stored in Stack
let MyNickName = MyName; // Stored in Stack
console.log("MyName: ", MyName); // This will return "Vatsal"

MyNickName = "Vatsal Shah"; // Stored in Stack
console.log("MyNickName: ", MyNickName);


let UserOne = {
    Name: "Vatsal",
    Age: 22,
    isActive: true
}; // Stored in Heap
console.log("UserOne: ", UserOne); // This will return { Name: "Vatsal", Age: 22, isActive: true } because UserOne is a reference to the object stored in Heap.

let UserTwo = UserOne; // Stored in Stack
UserTwo.Name = "Vatsal Shah"; // Stored in Heap

console.log("UserOne: ", UserOne); // This will return { Name: "Vatsal Shah", Age: 22, isActive: true } because UserTwo is a reference to UserOne and any changes made to UserTwo will also affect UserOne.
console.log("UserTwo: ", UserTwo); // This will return { Name: "Vatsal Shah", Age: 22, isActive: true } because UserTwo is a reference to UserOne and any changes made to UserTwo will also affect UserOne. 
