export class Payment {
    constructor(recipient, detaills, amount) {
        this.recipient = recipient;
        this.detaills = detaills;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes $${this.amount} for ${this.detaills}`;
    }
}
