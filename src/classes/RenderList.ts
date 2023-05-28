import { Invoice } from "./Invoice";
import { Payment } from "./Payment";


export class RenderList {
    constructor(private _container: HTMLUListElement) { }

    render(item: Payment | Invoice, header: string, pos: 'start' | 'end') {
        const li = document.createElement('li')
        
        const h4 = document.createElement("h4")
        h4.innerText =header
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)
    }
}