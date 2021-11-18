// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.detaills = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
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
//  (2) [Invoice, Invoice]
//  0 : Invoice {client: 'john', detaills: 'work on the john website', amount: 250}
//  1 : Invoice {client: 'david', detaills: 'work on the david website', amount: 300}
