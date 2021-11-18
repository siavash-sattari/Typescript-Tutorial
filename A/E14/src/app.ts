// Interfaces with Classes

import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("john", "web application", 800);
// docTwo = new Payment("david", "mobile application", 400);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// let invOne = new Invoice("john", "work on the john website", 250);
// let invTwo = new Invoice("david", "work on the david website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

var form = document.querySelector(".new-item-form") as HTMLFormElement;
var type = document.querySelector("#type") as HTMLSelectElement;
var toform = document.querySelector("#toform") as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toform.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
