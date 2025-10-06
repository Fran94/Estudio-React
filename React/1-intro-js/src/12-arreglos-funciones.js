
const papper = {
    product: 'paper',
    price: 100,
    quantity: 10,
}

const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Maria',
            lastName: 'Doe',
        },
        items: [
            {
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1,
            },
            papper,
        ], 
    },
    {
        id: 2,
        name: 'Compras de computación',
        client: {
            name: 'Pepe',
            lastName: 'Doe',
        },
        items: [
            {
                product: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'screen 17',
                price: 800,
                quantity: 1,
            },
            {
                product: 'cpu',
                price: 1000,
                quantity: 10,
            },
        ], 
    },
    {
        id: 3,
        name: 'Compras de papelería',
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items: [
            {
                product: 'pencil',
                price: 50,
                quantity: 1,
            },
            papper,
        ], 
    }
];


const invoicesName = invoices.map(i => {
    return i.name;
})

const invoicesClients = invoices.map(i => {
    return i.client.name;
})

console.log(invoicesName);
console.log(invoicesClients);

console.log("Find");
const invoiceFind = invoices.find(i => i.client.name === 'Pepe');
console.log(invoiceFind);

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
console.log(result);    