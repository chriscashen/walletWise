import { Payment } from "./classes/Payment";
import { Invoice } from "./classes/Invoice";
import { RenderList } from "./classes/RenderList";
import { InvoiceData } from "./types/InvoiceData";
import { PaymentData } from "./types/PaymentData";


const expenseForm = document.querySelector('.new-item-form') as HTMLFormElement;

// EXPENSE FORM INPUTS
const expenseType = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// LIST TEMPLATE
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new RenderList(ul)

// HANDLE FORM SUBMIT
expenseForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let docData: InvoiceData | PaymentData
    let doc: Invoice | Payment

    if (expenseType.value === "invoice") {
        docData = { client: toFrom.value, details: details.value, amount: +amount.value }
        doc = new Invoice(docData)
    } else {
        docData = { recipient: toFrom.value, details: details.value, amount: +amount.value }
        doc = new Payment(docData)
    }

    list.render(doc, expenseType.value, 'end')
})