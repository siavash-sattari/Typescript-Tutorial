export class Invoice {
    constructor(readonly client: string, private detaills: string, public amount: number) {}
  
    format() {
      return `${this.client} owes $${this.amount} for ${this.detaills}`;
    }
  }