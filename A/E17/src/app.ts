// Enums

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTION,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

let docOne: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: {name: "john"},
};

let docTwo: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: {title: "name of the wind"},
};

console.log(docOne, docTwo);

// { uid : 1 , resourceType : 0 , data : {name: "john"} }
// { uid : 1 , resourceType : 0 , data : {title:"name of the wind"} }
