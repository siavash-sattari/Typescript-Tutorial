export class Invoice {
    constructor(client, detaills, amount) {
        this.client = client;
        this.detaills = detaills;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detaills}`;
    }
}
