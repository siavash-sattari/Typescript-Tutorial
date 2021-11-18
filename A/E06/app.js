// Function Basics
var greet;
// greet="hello" ======> Error
greet = function () {
    console.log("Hello world");
};
var add1 = function (a, b, c) {
    console.log(a + b, c);
};
add1(5, 1); // 6 undefined
add1(5, 1, 15); // 6 15
add1(5, 1, "15"); // 6 "15"
var add2 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b, c);
};
add2(5, 1); // 6 10
add2(5, 1, 15); // 6 15
add2(5, 1, "15"); // 6 "15"
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 7)); // 17
