// Type Aliases

type StringOrNum = string | number;
type objWithName = {name: string; uid: StringOrNum};

var logDetails1 = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

var logDetails2 = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

var greet1 = (user: {name: string; uid: string | number}) => {
  console.log(`${user.name} says hello`);
};

var greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
