// Explicit Types =========================

var character: string;
var age: number;
var isLoggedIn: boolean;

// age = "john" ======> Error
age = 30;

// isLoggedIn = 25 ======> Error
isLoggedIn = true;

// Arrays ==================================

var ninjas: string[];
// ninjas = [1,2,3,4,5] ======> Error
ninjas = ["john", "david"];
ninjas.push("scott");
console.log(ninjas);

// union types =============================

var uid: string | number;
uid = "123";
uid = 123;
// uid=true ======> Error

var mixedArray: (string | number | boolean)[] = [];
mixedArray.push("john");
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);

// objects =================================

var ninjaOne: object;
ninjaOne = {name: "scott", age: 30};
// ninjaOne = 1

var ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {name: "john", age: 32, beltColor: "black"};
