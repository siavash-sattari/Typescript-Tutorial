// Dynamic (any) Types

var age: any;

age = 30;
console.log(age);

age = "Hello";
console.log(age);

age = {name: "John"};
console.log(age);

var mixed: any[] = [];

mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

// var ninja1 = {name:any , age:any}
var ninja: {name: any; age: any};

ninja = {name: "john", age: 27};
console.log(ninja);

ninja = {name: 27, age: "john"};
console.log(ninja);
