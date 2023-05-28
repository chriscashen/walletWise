import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
const expenseForm = document.querySelector('.new-item-form');
// EXPENSE FORM INPUTS
const expenseType = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// HANDLE FORM SUBMIT
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (expenseType.value === "invoice") {
        doc = ({ client: toFrom.value, details: details.value, amount: +amount.value });
        let invoice = new Invoice(doc);
        console.log('Invoice:', invoice.getPaymentDetails());
    }
    else {
        doc = ({ recipient: toFrom.value, details: details.value, amount: +amount.value });
        let payment = new Payment(doc);
        console.log('Payment', payment.getPaymentDetails());
    }
});
