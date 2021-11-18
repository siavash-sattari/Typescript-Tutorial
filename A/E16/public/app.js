"use strict";
// Generics
let addUID1 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID1({ name: "john", age: 40 });
console.log(doc1); // {name: 'john', age: 40, uid: 69}
// ========================================================
let addUID2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc2 = addUID2({ name: "john", age: 40 });
let doc3 = addUID2("hello");
console.log(doc2); // {name: 'john', age: 40, uid: 20}
console.log(doc3); // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', uid: 40}
// ========================================================
let addUID3 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc4 = addUID3({ name: "john", age: 40 });
// let doc5 = addUID3("hello"); =======> Error
console.log(doc4); // {name: 'john', age: 40, uid: 69}
const docOne = {
    uid: 1,
    resourceName: "person",
    data: { name: "john" },
};
const docTwo = {
    uid: 2,
    resourceName: "shopping list",
    data: ["bread", "milk", "toilet roll"],
};
console.log(docOne, docTwo);
