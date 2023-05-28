import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { InvoiceData } from "./types/InvoiceData";
import { PaymentData } from "./types/PaymentData";


const expenseForm = document.querySelector('.new-item-form') as HTMLFormElement;

// EXPENSE FORM INPUTS
const expenseType = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// HANDLE FORM SUBMIT
expenseForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let doc: InvoiceData | PaymentData

    if(expenseType.value === "invoice") {
        doc = ({client: toFrom.value, details: details.value, amount: +amount.value })
         let invoice = new Invoice(doc)
         console.log('Invoice:', invoice.getPaymentDetails())
    } else {
        doc = ({recipient: toFrom.value, details: details.value, amount: +amount.value })
         let payment = new Payment(doc)
         console.log('Payment', payment.getPaymentDetails())
    }
})