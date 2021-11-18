"use strict";
// Interfaces
const me = {
    name: "john",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me); // Hello john
