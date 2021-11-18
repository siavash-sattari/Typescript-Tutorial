// Explicit Types =========================
var character;
var age;
var isLoggedIn;
// age = "john" ======> Error
age = 30;
// isLoggedIn = 25 ======> Error
isLoggedIn = true;
// Arrays ==================================
var ninjas;
// ninjas = [1,2,3,4,5] ======> Error
ninjas = ["john", "david"];
ninjas.push("scott");
console.log(ninjas);
// union types =============================
var uid;
uid = "123";
uid = 123;
// uid=true ======> Error
var mixedArray = [];
mixedArray.push("john");
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);
// objects =================================
var ninjaOne;
ninjaOne = { name: "scott", age: 30 };
// ninjaOne = 1
var ninjaTwo;
ninjaTwo = { name: "john", age: 32, beltColor: "black" };
