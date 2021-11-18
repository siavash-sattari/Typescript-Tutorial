// Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "john",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spend", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("Hello", person.name);
};

greetPerson(me); // Hello john
