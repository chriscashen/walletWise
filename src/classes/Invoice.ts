import { HasFormatter } from "../interfaces/HasFormatter"
import { InvoiceData } from "../types/InvoiceData"

export class Invoice implements HasFormatter {

    constructor(private _invoiceData: InvoiceData) { }


    format() {
        return `${this._invoiceData.client} owes $${this._invoiceData.amount} for ${this._invoiceData.details}`
    }

    getPaymentDetails() {
        return this._invoiceData
    }

}

