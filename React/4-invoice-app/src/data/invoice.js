export const invoice = {
    id: 10,
    name: 'Componente PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Springfield',
            street: 'Evergreen Terrace',
            number: 742
        },

    },
    company: {
        name: 'New Egg',
        fiscalNumber: '123456789'
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair keyboard Mecanico',
            price: 150,
            quantity: 2,
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
        }
    ]
}