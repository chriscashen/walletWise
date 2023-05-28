export class Payment {
    constructor(_paymentData) {
        this._paymentData = _paymentData;
    }
    format() {
        return `${this._paymentData.recipient} owes $${this._paymentData.amount} for ${this._paymentData.details}`;
    }
    getPaymentDetails() {
        return this._paymentData;
    }
}
