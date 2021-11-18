// Rendering an HTML Template
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let toform = document.querySelector("#toform");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
let ul = document.querySelector("ul");
let list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
