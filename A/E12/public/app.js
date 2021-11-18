// Modules
import { Invoice } from "./classes/Invoice.js";
let invOne = new Invoice("john", "work on the john website", 250);
let invTwo = new Invoice("david", "work on the david website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
