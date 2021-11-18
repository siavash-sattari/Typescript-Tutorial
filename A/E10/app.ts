// Classes

class Invoice {
  client: string;
  detaills: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.detaills = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.detaills}`;
  }
}

let invOne = new Invoice("john", "work on the john website", 250);
let invTwo = new Invoice("david", "work on the david website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

//  (2) [Invoice, Invoice]
//  0 : Invoice {client: 'john', detaills: 'work on the john website', amount: 250}
//  1 : Invoice {client: 'david', detaills: 'work on the david website', amount: 300}