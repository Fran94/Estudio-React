

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
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
        {
            product: 'paper',
            price: 100,
            quantity: 10,
        },
    ], 
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola ${this.client.name}`;
    },
};

//invoice.client.name = 'Pepe'

console.log(invoice);

console.log(invoice.greeting());
console.log(invoice.total());