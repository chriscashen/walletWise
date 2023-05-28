import { HasFormatter } from "../interfaces/HasFormatter"
import { PaymentData } from "../types/PaymentData"

export class Payment implements HasFormatter {

    constructor(private _paymentData: PaymentData) { }


    format() {
        return `${this._paymentData.recipient} owes $${this._paymentData.amount} for ${this._paymentData.details}`
    }

    getPaymentDetails() {
        return this._paymentData
    }

}
