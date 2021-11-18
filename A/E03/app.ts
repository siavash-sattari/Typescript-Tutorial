// Arrays ===================================

var names = ["john", "scott", "david"];
names.push("mario");
names[0] = "nick";
// names.push(3) =======> Error
// names[0] = 3 =======> Error
console.log(names);

var numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7);
numbers[0] = 11;
// numbers.push("john") =======> Error
// numbers[0] = "john"; =======> Error
console.log(numbers);

var mixed = ["john", 4, "david", 8, 9];
mixed.push("scott");
mixed.push(20);
mixed[0] = 1;
console.log(mixed);

// Objects ===================================

var ninja = {
  name: "john",
  belt: "black",
  age: 30,
};

ninja.name = "david";
ninja.age = 40;
// ninja.age="40"; =======> Error
// ninja.skills = ["js","react"] =======> Error

ninja = {
  name: "scott",
  belt: "white",
  age: 35,
  // skills = ["js","react"] =======> Error
};
