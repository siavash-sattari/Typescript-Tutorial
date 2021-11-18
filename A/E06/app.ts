// Function Basics

var greet: Function;

// greet="hello" ======> Error

greet = () => {
  console.log("Hello world");
};

var add1 = (a: number, b: number, c?: number | string): void => {
  console.log(a + b, c);
};

add1(5, 1); // 6 undefined
add1(5, 1, 15); // 6 15
add1(5, 1, "15"); // 6 "15"

var add2 = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b, c);
};

add2(5, 1); // 6 10
add2(5, 1, 15); // 6 15
add2(5, 1, "15"); // 6 "15"

var sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(10, 7)); // 17
