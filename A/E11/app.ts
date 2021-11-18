// Public, Private & Readonly

class Invoice {
  // readonly client: string;
  // private detaills: string;
  // public amount: number;

  constructor(readonly client: string, private detaills: string, public amount: number) {}

  format() {
    // this.client = "something else" ======> Error
    return `${this.client} owes $${this.amount} for ${this.detaills}`;
  }
}

let invOne = new Invoice("john", "work on the john website", 250);
let invTwo = new Invoice("david", "work on the david website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.detaills,inv.amount, inv.format()); ======> Error
// });

invoices.forEach((inv) => {
  // inv.client = "something else" ======> Error
  console.log(inv.client, inv.amount, inv.format());
});
