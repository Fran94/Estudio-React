

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

//const invoice2 = invoice; // Copia de referencia
const invoice2 = { ...invoice }  // Copia de referencia operator (spread operator)

const result = invoice === invoice2;
if (result) {
    console.log(result); // true
} else {
    console.log('No son iguales');
} 

invoice2.id = 20; 

console.log(invoice.id);
console.log(invoice2.id);