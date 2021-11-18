// Function Signatures
// Example 1:
var greeting;
greeting = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// Example 2:
var calc;
calc = function (num1, num2, action) {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// Example 3:
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
