// Type Basics

var fName = "John";
var age = 30;
var isBlackBelt = false;

// fName = 20; =====> Error
fName = "Scott";

// age = "David" =====> Error
age = 40;

// isBlackBelt ="yes" =====> Error
isBlackBelt = true;

var circle = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circle(4));
