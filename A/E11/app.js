// Public, Private & Readonly
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private detaills: string;
    // public amount: number;
    function Invoice(client, detaills, amount) {
        this.client = client;
        this.detaills = detaills;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = "something else" ======> Error
        return this.client + " owes $" + this.amount + " for " + this.detaills;
    };
    return Invoice;
}());
var invOne = new Invoice("john", "work on the john website", 250);
var invTwo = new Invoice("david", "work on the david website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.detaills,inv.amount, inv.format()); ======> Error
// });
invoices.forEach(function (inv) {
    // inv.client = "something else" ======> Error
    console.log(inv.client, inv.amount, inv.format());
});
