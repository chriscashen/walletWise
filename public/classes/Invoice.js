export class Invoice {
    constructor(_invoiceData) {
        this._invoiceData = _invoiceData;
    }
    format() {
        return `${this._invoiceData.client} owes $${this._invoiceData.amount} for ${this._invoiceData.details}`;
    }
    getPaymentDetails() {
        return this._invoiceData;
    }
}
