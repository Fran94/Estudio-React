import invoices, { invoiceByClientName, papper } from './Data/invoices';


const invoicesName = invoices.map(i => {
    return i.name;
})

const invoicesClients = invoices.map(i => {
    return i.client.name;
})

console.log(invoicesName);
console.log(invoicesClients);

console.log("Find");
const invoiceFind = invoices.find(i => i.id === 2);
console.log(invoiceFind);

console.log("FindByName")
//const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe');
console.log(invoiceByClientName('Maria'));

console.log("Filter");
const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log("Filtro eliminmar");
const invoiceDelete = invoices.filter(i => i.id != '2');
console.log(invoiceDelete);

console.log("Filtro por includes");
const invoiceFilter2 = invoices.filter(i => i.items.includes(papper) );
console.log(invoiceFilter2);

console.log("Some");
const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)  