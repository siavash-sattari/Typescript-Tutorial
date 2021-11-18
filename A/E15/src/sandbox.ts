// Rendering an HTML Template

import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classes/ListTemplate.js";

let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let toform = document.querySelector("#toform") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

let ul = document.querySelector("ul")!;
let list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toform.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
