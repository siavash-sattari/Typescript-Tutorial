// Interfaces with Classes
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
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
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toform = document.querySelector("#toform");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
