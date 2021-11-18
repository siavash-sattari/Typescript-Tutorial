// Function Signatures

// Example 1:

var greeting: (a: string, b: string) => void;

greeting = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

// Example 2:

var calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

// Example 3:

var logDetails: (obj: {name: string; age: number}) => void;

type person = {name: string; age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
