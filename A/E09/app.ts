// The DOM & Type Casting

var anchor = document.querySelector("a")!;

console.log(anchor);
console.log(anchor.href);

// var form = document.querySelector("form")!;
var form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

var type = document.querySelector("#type") as HTMLSelectElement;
var toform = document.querySelector("#toform") as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toform.value, details.value, amount.value);
});
