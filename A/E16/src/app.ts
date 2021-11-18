// Generics

let addUID1 = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let doc1 = addUID1({name: "john", age: 40});
console.log(doc1); // {name: 'john', age: 40, uid: 69}

// ========================================================

let addUID2 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let doc2 = addUID2({name: "john", age: 40});
let doc3 = addUID2("hello");
console.log(doc2); // {name: 'john', age: 40, uid: 20}
console.log(doc3); // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o', uid: 40}

// ========================================================

let addUID3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let doc4 = addUID3({name: "john", age: 40});
// let doc5 = addUID3("hello"); =======> Error
console.log(doc4); // {name: 'john', age: 40, uid: 69}

// ========================================================

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: {name: "john"},
};

const docTwo: Resource<string[]> = {
  uid: 2,
  resourceName: "shopping list",
  data: ["bread", "milk", "toilet roll"],
};

console.log(docOne, docTwo);
